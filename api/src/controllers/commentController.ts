import { Response, Request } from 'express';
import { AuthRequest } from '../lib/types';
import Comment from '../model/comment.model';
import Post from '../model/post.model';

export const createComment = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { postId, content } = req.body;

    if (!content) {
      res.status(400).json({
        success: false,
        message: 'Content cannot be empty',
      });
      return;
    }

    const post = await Post.findById(postId);

    if (!post) {
      res.status(404).json({ success: false, message: 'Post not found' });
      return;
    }

    if (req.userID) {
      res
        .status(401)
        .json({ success: false, message: 'Unauthorized. Please log in.' });
      return;
    }

    const comment = await Comment.create({
      content,
      author: req.userID,
      post: postId,
    });
    res.status(201).json({ success: true, message: 'Comment added', comment });
    
  } catch (error) {
    console.error('Error in create comment', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};
