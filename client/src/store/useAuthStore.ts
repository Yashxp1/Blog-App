import { create } from 'zustand';
import axios from 'axios';
import { BaseURL } from './BaseURL';

export type AuthState = {
  user: any | null;
  token: string | null;
  register: (
    name: string,
    username: string,
    password: string
  ) => Promise<boolean>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,

  register: async (username, name, password) => {
    try {
      const res = await axios.post(`${BaseURL}/auth/register`, {
        name,
        username,
        password,
      });
      set({ user: res.data.user, token: res.data.token });
      localStorage.setItem('token', res.data.token);
      return true;
    } catch (error) {
      console.error('Registration failed', error);
      return false;
    }
  },

  login: async (username, password) => {
    try {
      const res = await axios.post(`${BaseURL}/auth/login`, {
        username,
        password,
      });
      set({ user: res.data.user, token: res.data.token });
      localStorage.setItem('token', res.data.token);
      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
}));
