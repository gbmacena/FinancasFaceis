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
    value: z.number().positive("Value must be a positive number"),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  }),
});

export const createExpenseSchema = z.object({
  params: z.object({
    userId: z.string().uuid("Invalid user UUID format"),
  }),
  body: z.object({
    title: z.string().min(1, "Title is required"),
    value: z.number().positive("Value must be a positive number"),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    categoryId: z.number().int("Category ID must be an integer").optional(),
  }),
});

export const updateExpenseSchema = z.object({
  params: z.object({
    expenseId: z.string().uuid("Invalid expense UUID format"),
  }),
  body: z.object({
    title: z.string().optional(),
    value: z.number().positive("Value must be a positive number").optional(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    categoryId: z.number().int("Category ID must be an integer").optional(),
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
