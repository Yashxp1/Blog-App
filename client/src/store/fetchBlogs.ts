import { create } from 'zustand';
import axios from 'axios';
import { BlogPost } from '../types/BlogType';
import { BaseURL } from './BaseURL';

type BlogStore = {
  blogs: BlogPost[];

  getBlogs: () => Promise<void>;
};

export const useBlogStore = create<BlogStore>((set) => ({
  blogs: [],
  getBlogs: async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const response = await axios.get(`${BaseURL}/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ blogs: response.data.getPosts });
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  },
}));
