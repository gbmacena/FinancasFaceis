import { z } from "zod";

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
    categoryId: z.number().int("Category ID must be an integer"),
    installments: z.number().int("Installments must be an integer").min(1).optional(),
    endDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .optional(),
    isRecurring: z.boolean().optional(),
    recurrenceInterval: z.literal("monthly").optional(),
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
