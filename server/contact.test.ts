import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("accepts a valid enquiry and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      firstName: "Rajesh",
      lastName: "Mehta",
      email: "rajesh@example.com",
      phone: "+919821024267",
      message: "I need a quote for a 10000 sqft warehouse floor using Tremix VDF.",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects a submission with a short message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        firstName: "Priya",
        lastName: "Sharma",
        email: "priya@example.com",
        phone: "+919876543210",
        message: "Hi",
      })
    ).rejects.toThrow();
  });

  it("rejects a submission with an invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        firstName: "Amit",
        lastName: "Patel",
        email: "not-an-email",
        phone: "+919876543210",
        message: "I need polished concrete for my showroom in Bandra.",
      })
    ).rejects.toThrow();
  });

  it("rejects a submission with a short phone number", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        firstName: "Sunita",
        lastName: "Joshi",
        email: "sunita@example.com",
        phone: "123",
        message: "Interested in laser screed flooring for our distribution centre.",
      })
    ).rejects.toThrow();
  });
});

describe("auth.me", () => {
  it("returns null for unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.me();
    expect(result).toBeNull();
  });
});
