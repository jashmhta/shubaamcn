import { eq, desc, asc, and, sql, like, or, gte, lte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser, users,
  serviceCategories, services, servicePackages,
  serviceProviders, providerServices,
  userAddresses, InsertUserAddress,
  bookings, InsertBooking,
  reviews, InsertReview,
  cities,
  promoCodes, InsertPromoCode,
  chatMessages, InsertChatMessage,
  searchKeywords,
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ─── User Queries ────────────────────────────────────────────────────────────

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) { console.warn("[Database] Cannot upsert user: database not available"); return; }
  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};
    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];
    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };
    textFields.forEach(assignNullable);
    if (user.lastSignedIn !== undefined) { values.lastSignedIn = user.lastSignedIn; updateSet.lastSignedIn = user.lastSignedIn; }
    if (user.role !== undefined) { values.role = user.role; updateSet.role = user.role; }
    else if (user.openId === ENV.ownerOpenId) { values.role = 'admin'; updateSet.role = 'admin'; }
    if (!values.lastSignedIn) values.lastSignedIn = new Date();
    if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();
    await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
  } catch (error) { console.error("[Database] Failed to upsert user:", error); throw error; }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createUser(data: {
  openId: string;
  name: string;
  email: string;
  passwordHash: string;
  loginMethod: string;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(users).values({
    openId: data.openId,
    name: data.name,
    email: data.email,
    passwordHash: data.passwordHash,
    loginMethod: data.loginMethod,
    emailVerified: false,
    lastSignedIn: new Date(),
  });
  return getUserByEmail(data.email);
}

export async function updateUserLastSignedIn(id: number) {
  const db = await getDb();
  if (!db) return;
  await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, id));
}

// ─── Category Queries ────────────────────────────────────────────────────────

export async function getAllCategories() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(serviceCategories).where(eq(serviceCategories.isActive, true)).orderBy(asc(serviceCategories.displayOrder));
}

export async function getCategoryBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(serviceCategories).where(eq(serviceCategories.slug, slug)).limit(1);
  return result[0];
}

// ─── Service Queries ─────────────────────────────────────────────────────────

export async function getServicesByCategory(categoryId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(services).where(and(eq(services.categoryId, categoryId), eq(services.isActive, true))).orderBy(desc(services.isPopular));
}

export async function getServiceBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(services).where(eq(services.slug, slug)).limit(1);
  return result[0];
}

export async function getServiceById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(services).where(eq(services.id, id)).limit(1);
  return result[0];
}

export async function getPopularServices(limit = 8) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(services).where(and(eq(services.isPopular, true), eq(services.isActive, true))).orderBy(desc(services.totalBookings)).limit(limit);
}

export async function getAllServices() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(services).where(eq(services.isActive, true)).orderBy(desc(services.totalBookings));
}

export async function searchServices(query: string) {
  const db = await getDb();
  if (!db) return [];
  const q = `%${query}%`;
  return db.select().from(services).where(
    and(
      or(
        like(services.name, q),
        like(services.shortDescription, q),
        like(services.searchKeywords, q)
      ),
      eq(services.isActive, true)
    )
  ).limit(20);
}

// ─── Search Autocomplete ────────────────────────────────────────────────────

export async function getSearchSuggestions(query: string) {
  const db = await getDb();
  if (!db) return [];
  const q = `%${query}%`;
  return db.select().from(searchKeywords)
    .where(and(like(searchKeywords.keyword, q), eq(searchKeywords.isActive, true)))
    .orderBy(desc(searchKeywords.searchCount))
    .limit(8);
}

export async function incrementSearchCount(keyword: string) {
  const db = await getDb();
  if (!db) return;
  await db.update(searchKeywords)
    .set({ searchCount: sql`searchCount + 1` })
    .where(eq(searchKeywords.keyword, keyword));
}

// ─── Package Queries ─────────────────────────────────────────────────────────

export async function getPackagesByService(serviceId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(servicePackages).where(and(eq(servicePackages.serviceId, serviceId), eq(servicePackages.isActive, true))).orderBy(asc(servicePackages.displayOrder));
}

// ─── Provider Queries ────────────────────────────────────────────────────────

export async function getProvidersByCategory(categoryId: number) {
  const db = await getDb();
  if (!db) return [];
  const mappings = await db.select().from(providerServices).where(eq(providerServices.categoryId, categoryId));
  if (mappings.length === 0) return [];
  const providerIds = mappings.map(m => m.providerId);
  const result = await db.select().from(serviceProviders).where(and(eq(serviceProviders.isActive, true)));
  return result.filter(p => providerIds.includes(p.id));
}

export async function getProviderById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(serviceProviders).where(eq(serviceProviders.id, id)).limit(1);
  return result[0];
}

export async function getAllProviders() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(serviceProviders).where(eq(serviceProviders.isActive, true)).orderBy(desc(serviceProviders.avgRating));
}

// ─── Address Queries ─────────────────────────────────────────────────────────

export async function getUserAddresses(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(userAddresses).where(eq(userAddresses.userId, userId)).orderBy(desc(userAddresses.isDefault));
}

export async function createAddress(address: InsertUserAddress) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(userAddresses).values(address);
  return result[0].insertId;
}

export async function deleteAddress(id: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(userAddresses).where(and(eq(userAddresses.id, id), eq(userAddresses.userId, userId)));
}

// ─── Booking Queries ─────────────────────────────────────────────────────────

export async function createBooking(booking: InsertBooking) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(bookings).values(booking);
  return result[0].insertId;
}

export async function getUserBookings(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(bookings).where(eq(bookings.userId, userId)).orderBy(desc(bookings.createdAt));
}

export async function getBookingById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(bookings).where(eq(bookings.id, id)).limit(1);
  return result[0];
}

export async function getBookingByNumber(bookingNumber: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(bookings).where(eq(bookings.bookingNumber, bookingNumber)).limit(1);
  return result[0];
}

export async function updateBookingStatus(id: number, status: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const updateData: Record<string, any> = { status: status as any };
  if (status === 'cancelled') updateData.cancelledAt = new Date();
  if (status === 'completed') updateData.completedAt = new Date();
  await db.update(bookings).set(updateData).where(eq(bookings.id, id));
}

export async function updateBookingPayment(id: number, data: {
  paymentStatus?: string;
  paymentMethod?: string;
  stripePaymentIntentId?: string;
  paidAt?: Date;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(bookings).set(data as any).where(eq(bookings.id, id));
}

export async function cancelBooking(id: number, reason: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(bookings).set({
    status: 'cancelled',
    cancellationReason: reason,
    cancelledAt: new Date(),
  }).where(eq(bookings.id, id));
}

export async function getAllBookings() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(bookings).orderBy(desc(bookings.createdAt));
}

// ─── Promo Code Queries ─────────────────────────────────────────────────────

export async function validatePromoCode(code: string, orderAmount: number) {
  const db = await getDb();
  if (!db) return null;
  const now = new Date();
  const result = await db.select().from(promoCodes)
    .where(and(
      eq(promoCodes.code, code.toUpperCase()),
      eq(promoCodes.isActive, true),
    ))
    .limit(1);
  if (result.length === 0) return null;
  const promo = result[0];
  // Check validity period
  if (promo.validFrom && now < promo.validFrom) return null;
  if (promo.validUntil && now > promo.validUntil) return null;
  // Check usage limit
  if (promo.usageLimit && (promo.usedCount ?? 0) >= promo.usageLimit) return null;
  // Check minimum order amount
  if (promo.minOrderAmount && orderAmount < parseFloat(promo.minOrderAmount)) return null;

  // Calculate discount
  let discount = 0;
  if (promo.discountType === 'percentage') {
    discount = orderAmount * (parseFloat(promo.discountValue) / 100);
    if (promo.maxDiscount) discount = Math.min(discount, parseFloat(promo.maxDiscount));
  } else {
    discount = parseFloat(promo.discountValue);
  }

  return { ...promo, calculatedDiscount: discount };
}

export async function incrementPromoUsage(id: number) {
  const db = await getDb();
  if (!db) return;
  await db.update(promoCodes).set({ usedCount: sql`usedCount + 1` }).where(eq(promoCodes.id, id));
}

export async function getActivePromoCodes() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(promoCodes).where(eq(promoCodes.isActive, true)).orderBy(desc(promoCodes.createdAt));
}

// ─── Chat Message Queries ───────────────────────────────────────────────────

export async function getChatHistory(userId: number, sessionId: string, limit = 50) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(chatMessages)
    .where(and(eq(chatMessages.userId, userId), eq(chatMessages.sessionId, sessionId)))
    .orderBy(asc(chatMessages.createdAt))
    .limit(limit);
}

export async function saveChatMessage(msg: InsertChatMessage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(chatMessages).values(msg);
  return result[0].insertId;
}

export async function clearChatHistory(userId: number, sessionId?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  if (sessionId) {
    await db.delete(chatMessages).where(and(eq(chatMessages.userId, userId), eq(chatMessages.sessionId, sessionId)));
  } else {
    await db.delete(chatMessages).where(eq(chatMessages.userId, userId));
  }
  return { success: true };
}

export async function getLatestChatSession(userId: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(chatMessages)
    .where(eq(chatMessages.userId, userId))
    .orderBy(desc(chatMessages.createdAt))
    .limit(1);
  return result[0]?.sessionId ?? null;
}

// ─── Review Queries ──────────────────────────────────────────────────────────

export async function getReviewsByService(serviceId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(reviews).where(eq(reviews.serviceId, serviceId)).orderBy(desc(reviews.createdAt));
}

export async function createReview(review: InsertReview) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(reviews).values(review);
  const serviceReviews = await getReviewsByService(review.serviceId);
  const avgRating = serviceReviews.reduce((sum, r) => sum + r.rating, 0) / serviceReviews.length;
  await db.update(services).set({ avgRating: avgRating.toFixed(2), totalReviews: serviceReviews.length }).where(eq(services.id, review.serviceId));
  return result[0].insertId;
}

export async function getRecentReviews(limit = 10) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(reviews).orderBy(desc(reviews.createdAt)).limit(limit);
}

// ─── City Queries ────────────────────────────────────────────────────────────

export async function getAllCities() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(cities).where(eq(cities.isActive, true)).orderBy(asc(cities.displayOrder));
}

// ─── Admin Stats ─────────────────────────────────────────────────────────────

export async function getAdminStats() {
  const db = await getDb();
  if (!db) return { totalBookings: 0, totalRevenue: 0, totalUsers: 0, totalProviders: 0 };

  const [bookingStats] = await db.select({
    count: sql<number>`COUNT(*)`,
    revenue: sql<number>`COALESCE(SUM(totalAmount), 0)`
  }).from(bookings);

  const [userStats] = await db.select({ count: sql<number>`COUNT(*)` }).from(users);
  const [providerStats] = await db.select({ count: sql<number>`COUNT(*)` }).from(serviceProviders);

  return {
    totalBookings: bookingStats?.count ?? 0,
    totalRevenue: bookingStats?.revenue ?? 0,
    totalUsers: userStats?.count ?? 0,
    totalProviders: providerStats?.count ?? 0,
  };
}
