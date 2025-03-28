import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'https://localhost:3001/api/v1';

type AuthState = {
  user: any | null;
  token: string | null;
  register: (name: string, username: string, password: string) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,

  register: async (username, name, password) => {
    try {
      const res = await axios.post(`${API_URL}/auth/register`, {
        name,
        username,
        password,
      });
      set({ user: res.data.user, token: res.data.token });
      localStorage.setItem('token', res.data.tok);
    } catch (error) {
      console.error('Registration failed', error);
    }
  },

  login: async (username, password) => {
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });
      set({ user: res.data.user, token: res.data.token });
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
}));
