import api from "./api";
import { User, Expense } from "../types";

const userService = {
  register: async (
    name: string,
    email: string,
    password: string
  ): Promise<{ message: string }> => {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  },

  login: async (
    email: string,
    password: string
  ): Promise<{
    accessToken: string;
    user: User;
  }> => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  },

  getDashboard: async (
    userId: string,
    filters?: { month?: string; title?: string; category?: string }
  ): Promise<{
    user: User;
    expenses: Expense[];
  }> => {
    const response = await api.get(`/users/${userId}/dashboard`, {
      params: filters,
    });
    return response.data;
  },
};

export default userService;
