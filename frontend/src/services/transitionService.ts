import axios from "axios";

const API_URL = "http://localhost:3001/api";

const transactionService = {
  /**
   *
   * @param
   * @param
   * @returns
   */
  updateExpense: async (
    expenseId: string,
    updateData: {
      title?: string;
      value?: number;
      date?: string;
      categoryId?: number;
    }
  ): Promise<{ message: string }> => {
    try {
      const token = localStorage.getItem("accessToken")?.replace(/"/g, "");
      if (!token) {
        throw new Error(
          "Token de autenticação não encontrado no localStorage."
        );
      }

      const response = await axios.put(
        `${API_URL}/transactions/expenses/${expenseId}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Erro ao atualizar a despesa"
        );
      }
      throw new Error("Erro inesperado ao atualizar a despesa");
    }
  },
  createEntry: async (
    userId: string,
    entryData: {
      value: number;
      date: string;
    }
  ): Promise<{ message: string }> => {
    try {
      const token = localStorage.getItem("accessToken")?.replace(/"/g, "");
      if (!token) {
        throw new Error(
          "Token de autenticação não encontrado no localStorage."
        );
      }

      const response = await axios.post(
        `${API_URL}/transactions/${userId}/entries`,
        entryData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Erro ao criar a entrada"
        );
      }
      throw new Error("Erro inesperado ao criar a entrada");
    }
  },

  /**
   * @param
   * @returns
   */
  deleteExpense: async (expenseId: string): Promise<{ message: string }> => {
    try {
      const token = localStorage.getItem("accessToken")?.replace(/"/g, "");
      if (!token) {
        throw new Error(
          "Token de autenticação não encontrado no localStorage."
        );
      }

      const response = await axios.delete(
        `${API_URL}/transactions/expenses/${expenseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Erro ao deletar a despesa"
        );
      }
      throw new Error("Erro inesperado ao deletar a despesa");
    }
  },

  createExpense: async (
    userId: string,
    expenseData: {
      title: string;
      value: number;
      date: string;
      categoryId?: number;
      installments?: number;
      isRecurring?: boolean;
      endDate?: string;
    }
  ): Promise<{ message: string }> => {
    try {
      const token = localStorage.getItem("accessToken")?.replace(/"/g, "");
      if (!token) {
        throw new Error(
          "Token de autenticação não encontrado no localStorage."
        );
      }

      const response = await axios.post(
        `${API_URL}/transactions/${userId}/expenses`,
        expenseData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Erro ao criar o gasto"
        );
      }
      throw new Error("Erro inesperado ao criar o gasto");
    }
  },
};

export default transactionService;
