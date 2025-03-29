import { create } from 'zustand';
import axios from 'axios';
import { BlogPost } from '../types/BlogType';
import { BaseURL } from './BaseURL';

type BlogStore = {
  blogs: BlogPost[];
  getBlogs: () => Promise<void>;
  createBlog: (
    title: string,
    content: string,
    image?: string,
    tags?: string[]
  ) => Promise<boolean>;
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

  createBlog: async (title, content, image = '', tags = []) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No authentication token found');
        return false;
      }
      const res = await axios.post(
        `${BaseURL}/blogs/create`,
        { title, content, image, tags },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.status === 201) {
        set((state) => ({
          blogs: [...state.blogs, res.data.newPost],
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error('No authentication token found');
      return false;
    }
  },
}));
