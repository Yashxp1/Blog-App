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
      const response = await axios.get(`${BaseURL}/blogs`);
      set({ blogs: response.data.getPosts});
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  },
}));
