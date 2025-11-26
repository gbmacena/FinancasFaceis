import axios from "axios";
import { toast } from "sonner";
import { getItem, removeItem } from "@/utils/storage";

const API_URL = "https://financasfaceis-2.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const isAuthRoute =
        error.config?.url?.includes("/auth/login") ||
        error.config?.url?.includes("/auth/register");

      if (!isAuthRoute) {
        toast.error("Sessão expirada. Faça login novamente.");
        removeItem("accessToken");
        removeItem("user");

        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
