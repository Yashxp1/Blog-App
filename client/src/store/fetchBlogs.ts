import { create } from 'zustand';
import axios from 'axios';
import { BlogPost } from '../types/BlogType';
import { BaseURL } from './BaseURL';

type BlogStore = {
  blogs: BlogPost[];
  singleBlog: BlogPost | null;
  getBlogs: () => Promise<void>;

  createBlog: (
    title: string,
    content: string,
    image?: string,
    tags?: string[]
  ) => Promise<boolean>;

  getSingleBlog: (id: string) => Promise<void>;
};

export const useBlogStore = create<BlogStore>((set) => ({
  blogs: [],
  singleBlog: null,

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

      console.log(token);

      if (!token) {
        console.error('No authentication token found');
        console.log(token);
        return false;
      }

      const res = await axios.post(
        'http://localhost:3001/api/v1/blogs/create',
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
      console.error('No authentication token found', error);
      return false;
    }
  },

  getSingleBlog: async (id) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const res = await axios.get(`${BaseURL}/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ singleBlog: res.data.post });
    } catch (error) {
      console.error('Error fetching single blog:', error);
    }
  },
}));
