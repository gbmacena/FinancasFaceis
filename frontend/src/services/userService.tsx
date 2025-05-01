import axios from "axios";

const API_URL = "http://localhost:3001/api/auth";

const userService = {
  register: async (
    name: string,
    email: string,
    password: string
  ): Promise<{ message: string }> => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
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
    refreshToken: string;
    user: { uuid: string; name: string };
  }> => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
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
};

export default userService;
