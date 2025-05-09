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
      `/transactions/expenses/${expenseId}`,
      updateData
    );
    return response.data;
  },

  createEntry: async (
    userId: string,
    entryData: Pick<Expense, "value" | "date">
  ): Promise<{ message: string }> => {
    const response = await api.post(
      `/transactions/${userId}/entries`,
      entryData
    );
    return response.data;
  },

  deleteExpense: async (expenseId: string): Promise<{ message: string }> => {
    const response = await api.delete(`/transactions/expenses/${expenseId}`);
    return response.data;
  },

  createExpense: async (
    userId: string,
    expenseData: Omit<Expense, "uuid" | "category"> & {
      categoryId?: number;
    }
  ): Promise<{ message: string }> => {
    const response = await api.post(
      `/transactions/${userId}/expenses`,
      expenseData
    );
    return response.data;
  },
};

export default transactionService;
