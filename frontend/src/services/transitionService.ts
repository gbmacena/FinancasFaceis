import api from "./api";
import { Expense } from "@/types";

const transactionService = {
  updateExpense: async (
    expenseId: string,
    updateData: Partial<Pick<Expense, "title" | "value" | "date">> & {
      categoryId?: number;
    }
  ): Promise<{ message: string }> => {
    const response = await api.put(
      `/api/transactions/expenses/${expenseId}`,
      updateData
    );
    return response.data;
  },

  createEntry: async (
    userId: string,
    entryData: Pick<Expense, "value" | "date">
  ): Promise<{ message: string }> => {
    const response = await api.post(
      `/api/transactions/${userId}/entries`,
      entryData
    );
    return response.data;
  },

  deleteExpense: async (expenseId: string): Promise<{ message: string }> => {
    const response = await api.delete(
      `/api/transactions/expenses/${expenseId}`
    );
    return response.data;
  },

  createExpense: async (
    userId: string,
    expenseData: Omit<Expense, "uuid" | "category"> & {
      categoryId?: number;
    }
  ): Promise<{ message: string }> => {
    const response = await api.post(
      `/api/transactions/${userId}/expenses`,
      expenseData
    );
    return response.data;
  },
};

export default transactionService;
