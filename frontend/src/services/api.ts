import axios from "axios";
import { toast } from "sonner";
import { getItem, removeItem } from "@/utils/storage";
import { useRouter } from "next/navigation";

const API_URL = "http://localhost:3001/api";

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
      toast.error("Sessão expirada. Faça login novamente.");
      removeItem("accessToken");
      removeItem("user");

      const router = useRouter();
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

export default api;
