import { create } from 'zustand';
import axios from 'axios';
import { Comment } from '../types/commentTypes';
import { BaseURL } from './BaseURL';


type CommentStore = {
  comments: Comment[];
  getComments: (blogId: string) => Promise<void>;
  createComment: (blogId: string, content: string) => Promise<boolean>;
  deleteComment: (blogId: string, commentId: string) => Promise<void>;
};

export const useCommentStore = create<CommentStore>((set) => ({
  comments: [],

  getComments: async (blogId) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const res = await axios.get(`${BaseURL}/blogs/${blogId}/comments`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      set({ comments: res.data.comments });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  },

  createComment: async (blogId, content) => {
    if (!blogId) {
      console.error('Error: blogId is undefined');
      return false;
    }

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No authentication token found');
        return false;
      }

      const res = await axios.post(
        `${BaseURL}/blogs/${blogId}/comments/create`,
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.status === 201) {
        set((state) => ({
          comments: [...state.comments, res.data.comment],
        }));
        return true;
      }

      return false;
    } catch (error) {
      console.error('Error creating comment:', error);
      return false;
    }
  },

  deleteComment: async (blogId, commentId) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log('No token found');
        return;
      }

       await axios.delete(
        `${BaseURL}/blogs/${blogId}/comments/delete/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set((state) => ({
        comments: state.comments.filter((comment) => comment._id !== commentId),
      }));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  },
}));
