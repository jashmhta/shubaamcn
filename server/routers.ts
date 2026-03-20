import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(7),
        message: z.string().min(10),
      }))
      .mutation(async ({ input }) => {
        // Notify the owner
        await notifyOwner({
          title: `New Enquiry from ${input.firstName} ${input.lastName}`,
          content: `Phone: ${input.phone}\nEmail: ${input.email}\n\nMessage:\n${input.message}`,
        });
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
