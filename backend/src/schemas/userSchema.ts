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

export const createEntrySchema = z.object({
  params: z.object({
    userId: z.string().uuid("Invalid user UUID format"),
  }),
  body: z.object({
    amount: z.number(),
    description: z.string(),
  }),
});
