import axios from "axios";
import { User, Expense } from "../types";

const API_URL = "http://localhost:3001/api";

const userService = {
  register: async (
    name: string,
    email: string,
    password: string
  ): Promise<{ message: string }> => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Error registering user"
        );
      }
      throw new Error("Unexpected error while registering user");
    }
  },

  login: async (
    email: string,
    password: string
  ): Promise<{
    accessToken: string;
    user: User;
  }> => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Error logging in");
      }
      throw new Error("Unexpected error while logging in");
    }
  },

  getDashboard: async (
    userId: string,
    filters?: { month?: string; title?: string; category?: string }
  ): Promise<{
    user: User;
    expenses: Expense[];
  }> => {
    try {
      const token = localStorage.getItem("accessToken")?.replace(/"/g, "");
      if (!token) {
        throw new Error(
          "Token de autenticação não encontrado no localStorage."
        );
      }

      const response = await axios.get(`${API_URL}/users/${userId}/dashboard`, {
        params: filters,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Erro ao buscar o dashboard"
        );
      }
      throw new Error("Erro inesperado ao buscar o dashboard");
    }
  },
};

export default userService;
