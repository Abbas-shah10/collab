import { create } from "zustand";
import api from "../services/api";

interface User {
  user: null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

interface Credentials {
  email: string;
  password: string;
}

const useAuthStore = create<User>((set) => ({
  user: null,
  loading: false,
  error: null,
  initialized: false,

  login: async (credentails: Credentials) => {
    set({ loading: true });
    try {
      const { data } = await api.post(`/auth/login`, credentails);

      set({
        user: data,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      const { data } = await api.get("/auth/me");

      set({
        user: data.user,
        initialized: true,
      });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useAuthStore;
