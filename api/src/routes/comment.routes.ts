import express from 'express';
import {
  createComment,
  deleteComment,
  getAllComments,
} from '../controllers/commentController';
import auth from '../middleware/auth.middleware';

const commentRouter = express.Router();

commentRouter.post('/blogs/:blogId/comments/create', auth, createComment);
commentRouter.get('/blogs/:blogId/comments', auth, getAllComments);
commentRouter.delete('/blogs/:blogId/comments/delete/:commentId', auth, deleteComment);

export default commentRouter