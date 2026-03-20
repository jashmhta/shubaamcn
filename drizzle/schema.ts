import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, json } from "drizzle-orm/mysql-core";

// ─── Users ───────────────────────────────────────────────────────────────────
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  avatarUrl: text("avatarUrl"),
  loginMethod: varchar("loginMethod", { length: 64 }),
  // Custom email/password auth fields
  passwordHash: text("passwordHash"),
  emailVerified: boolean("emailVerified").default(false),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Service Categories ──────────────────────────────────────────────────────
export const serviceCategories = mysqlTable("service_categories", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  iconName: varchar("iconName", { length: 50 }),
  imageUrl: text("imageUrl"),
  colorAccent: varchar("colorAccent", { length: 20 }),
  displayOrder: int("displayOrder").default(0),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ServiceCategory = typeof serviceCategories.$inferSelect;
export type InsertServiceCategory = typeof serviceCategories.$inferInsert;

// ─── Services ────────────────────────────────────────────────────────────────
export const services = mysqlTable("services", {
  id: int("id").autoincrement().primaryKey(),
  categoryId: int("categoryId").notNull(),
  name: varchar("name", { length: 200 }).notNull(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  shortDescription: text("shortDescription"),
  longDescription: text("longDescription"),
  imageUrl: text("imageUrl"),
  galleryUrls: json("galleryUrls"),
  basePrice: decimal("basePrice", { precision: 10, scale: 2 }).notNull(),
  unit: varchar("unit", { length: 50 }).default("per service"),
  estimatedDuration: varchar("estimatedDuration", { length: 50 }),
  avgRating: decimal("avgRating", { precision: 3, scale: 2 }).default("0"),
  totalReviews: int("totalReviews").default(0),
  totalBookings: int("totalBookings").default(0),
  highlights: json("highlights"),
  includes: json("includes"),
  excludes: json("excludes"),
  searchKeywords: text("searchKeywords"),
  isPopular: boolean("isPopular").default(false),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Service = typeof services.$inferSelect;
export type InsertService = typeof services.$inferInsert;

// ─── Service Packages (tiers within a service) ──────────────────────────────
export const servicePackages = mysqlTable("service_packages", {
  id: int("id").autoincrement().primaryKey(),
  serviceId: int("serviceId").notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  features: json("features"),
  estimatedDuration: varchar("estimatedDuration", { length: 50 }),
  isRecommended: boolean("isRecommended").default(false),
  displayOrder: int("displayOrder").default(0),
  isActive: boolean("isActive").default(true),
});

export type ServicePackage = typeof servicePackages.$inferSelect;
export type InsertServicePackage = typeof servicePackages.$inferInsert;

// ─── Service Providers ───────────────────────────────────────────────────────
export const serviceProviders = mysqlTable("service_providers", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 320 }),
  avatarUrl: text("avatarUrl"),
  bio: text("bio"),
  experience: int("experience").default(0),
  avgRating: decimal("avgRating", { precision: 3, scale: 2 }).default("0"),
  totalJobs: int("totalJobs").default(0),
  totalReviews: int("totalReviews").default(0),
  specializations: json("specializations"),
  isVerified: boolean("isVerified").default(false),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ServiceProvider = typeof serviceProviders.$inferSelect;
export type InsertServiceProvider = typeof serviceProviders.$inferInsert;

// ─── Provider-Service mapping ────────────────────────────────────────────────
export const providerServices = mysqlTable("provider_services", {
  id: int("id").autoincrement().primaryKey(),
  providerId: int("providerId").notNull(),
  categoryId: int("categoryId").notNull(),
});

// ─── User Addresses ──────────────────────────────────────────────────────────
export const userAddresses = mysqlTable("user_addresses", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  label: varchar("label", { length: 50 }).default("Home"),
  fullName: varchar("fullName", { length: 200 }),
  phone: varchar("phone", { length: 20 }),
  addressLine1: text("addressLine1").notNull(),
  addressLine2: text("addressLine2"),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  pincode: varchar("pincode", { length: 10 }).notNull(),
  landmark: text("landmark"),
  isDefault: boolean("isDefault").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UserAddress = typeof userAddresses.$inferSelect;
export type InsertUserAddress = typeof userAddresses.$inferInsert;

// ─── Promo Codes ─────────────────────────────────────────────────────────────
export const promoCodes = mysqlTable("promo_codes", {
  id: int("id").autoincrement().primaryKey(),
  code: varchar("code", { length: 50 }).notNull().unique(),
  description: text("description"),
  discountType: mysqlEnum("discountType", ["percentage", "flat"]).notNull(),
  discountValue: decimal("discountValue", { precision: 10, scale: 2 }).notNull(),
  maxDiscount: decimal("maxDiscount", { precision: 10, scale: 2 }),
  minOrderAmount: decimal("minOrderAmount", { precision: 10, scale: 2 }).default("0"),
  usageLimit: int("usageLimit"),
  usedCount: int("usedCount").default(0),
  validFrom: timestamp("validFrom"),
  validUntil: timestamp("validUntil"),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PromoCode = typeof promoCodes.$inferSelect;
export type InsertPromoCode = typeof promoCodes.$inferInsert;

// ─── Bookings ────────────────────────────────────────────────────────────────
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  bookingNumber: varchar("bookingNumber", { length: 20 }).notNull().unique(),
  userId: int("userId").notNull(),
  serviceId: int("serviceId").notNull(),
  packageId: int("packageId"),
  providerId: int("providerId"),
  addressId: int("addressId").notNull(),
  status: mysqlEnum("status", [
    "pending", "confirmed", "assigned", "in_progress", "completed", "cancelled", "refunded"
  ]).default("pending").notNull(),
  scheduledDate: timestamp("scheduledDate").notNull(),
  scheduledTimeSlot: varchar("scheduledTimeSlot", { length: 50 }),
  // Pricing breakdown
  subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull(),
  gstRate: decimal("gstRate", { precision: 5, scale: 2 }).default("18.00"),
  gstAmount: decimal("gstAmount", { precision: 10, scale: 2 }).default("0"),
  platformFee: decimal("platformFee", { precision: 10, scale: 2 }).default("0"),
  discountAmount: decimal("discountAmount", { precision: 10, scale: 2 }).default("0"),
  promoCodeId: int("promoCodeId"),
  totalAmount: decimal("totalAmount", { precision: 10, scale: 2 }).notNull(),
  // Payment
  paymentStatus: mysqlEnum("paymentStatus", ["pending", "paid", "refunded", "failed"]).default("pending"),
  paymentMethod: varchar("paymentMethod", { length: 50 }),
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }),
  stripeRefundId: varchar("stripeRefundId", { length: 255 }),
  paidAt: timestamp("paidAt"),
  // Booking details
  isUrgent: boolean("isUrgent").default(false),
  notes: text("notes"),
  cancellationReason: text("cancellationReason"),
  cancelledAt: timestamp("cancelledAt"),
  completedAt: timestamp("completedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

// ─── Reviews ─────────────────────────────────────────────────────────────────
export const reviews = mysqlTable("reviews", {
  id: int("id").autoincrement().primaryKey(),
  bookingId: int("bookingId").notNull(),
  userId: int("userId").notNull(),
  serviceId: int("serviceId").notNull(),
  providerId: int("providerId"),
  rating: int("rating").notNull(),
  title: varchar("title", { length: 200 }),
  comment: text("comment"),
  isVerified: boolean("isVerified").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Review = typeof reviews.$inferSelect;
export type InsertReview = typeof reviews.$inferInsert;

// ─── Cities ──────────────────────────────────────────────────────────────────
export const cities = mysqlTable("cities", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  state: varchar("state", { length: 100 }).notNull(),
  isActive: boolean("isActive").default(true),
  displayOrder: int("displayOrder").default(0),
});

export type City = typeof cities.$inferSelect;
export type InsertCity = typeof cities.$inferInsert;

// ─── Chat Messages ───────────────────────────────────────────────────────────
export const chatMessages = mysqlTable("chat_messages", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  sessionId: varchar("sessionId", { length: 64 }).notNull(),
  role: mysqlEnum("role", ["user", "assistant"]).notNull(),
  content: text("content").notNull(),
  language: varchar("language", { length: 10 }).default('en'),
  metadata: json("metadata"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = typeof chatMessages.$inferInsert;

// ─── Search Keywords (for autocomplete) ──────────────────────────────────────
export const searchKeywords = mysqlTable("search_keywords", {
  id: int("id").autoincrement().primaryKey(),
  keyword: varchar("keyword", { length: 200 }).notNull(),
  serviceId: int("serviceId"),
  categoryId: int("categoryId"),
  searchCount: int("searchCount").default(0),
  isActive: boolean("isActive").default(true),
});

export type SearchKeyword = typeof searchKeywords.$inferSelect;
export type InsertSearchKeyword = typeof searchKeywords.$inferInsert;
