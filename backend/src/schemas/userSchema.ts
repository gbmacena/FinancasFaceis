import { z } from "zod";

export const userUuidSchema = z.object({
  params: z.object({
    userId: z.string().uuid("Invalid user UUID format"),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    userId: z.string().uuid("Invalid user UUID format"),
  }),
  body: z.object({
    name: z.string().optional(),
    email: z.string().email("Invalid email").optional(),
  }),
});

export const dashboardSchema = z.object({
  query: z.object({
    month: z
      .string()
      .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Invalid month format (expected YYYY-MM)")
      .optional(),
    category: z.string().optional(),
    title: z.string().optional(),
  }),
});
