import express from 'express';
import {
  createBlog,
  deletePost,
  getAllBlog,
  getSinglePost,
  updatePost,
} from '../controllers/blogController';
import auth from '../middleware/auth.middleware';

const blogRouter = express.Router();

blogRouter.post('/blogs/create', auth, createBlog);
blogRouter.get('/blogs', getAllBlog);
blogRouter.get('/blogs/:id', auth, getSinglePost);
blogRouter.put('/blogs/update', auth, updatePost);
blogRouter.delete('/blogs/delete/:id', auth, deletePost);

export default blogRouter;
