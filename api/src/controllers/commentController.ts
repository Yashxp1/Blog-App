import { Response, Request } from 'express';
import { AuthRequest } from '../lib/types';
import Comment from '../model/comment.model';
import Post from '../model/post.model';

export const createComment = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { blogId } = req.params;
    const { content } = req.body;

    if (!content) {
      res.status(400).json({
        success: false,
        message: 'Content cannot be empty',
      });
      return;
    }

    const post = await Post.findById(blogId);

    if (!post) {
      res.status(404).json({ success: false, message: 'Post not found' });
      return;
    }

    if (!req.userID) {
      res
        .status(401)
        .json({ success: false, message: 'Unauthorized. Please log in.' });
      return;
    }

    let comment = await Comment.create({
      content,
      author: req.userID,
      post: blogId,
    });

    comment = await comment.populate('author', 'username name');

    res.status(201).json({ success: true, message: 'Comment added', comment });
  } catch (error) {
    console.error('Error in create comment', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

export const deleteComment = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { commentId } = req.params;

    if (!commentId) {
      res
        .status(404)
        .json({ success: false, message: 'comment ID is required' });
      return;
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      res.status(404).json({ success: false, message: 'comment not found' });
      return;
    }

    if (!req.userID) {
      res
        .status(401)
        .json({ success: false, message: 'Unauthorized. Please log in.' });
      return;
    }

    if (comment.author.toString() !== req.userID) {
      res.status(403).json({
        success: false,
        message: 'You can only delete your own comment',
      });
      return;
    }

    if (!comment.post) {
      res.status(400).json({
        success: false,
        message: 'Invalid comment: No associated post',
      });
      return;
    }

    await comment.deleteOne();
    res
      .status(200)
      .json({ success: true, message: 'comment deleted successfully' });
    return;
  } catch (error) {
    console.error('Error in delete comment', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const getAllComments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { blogId } = req.params;

    const comments = await Comment.find({ post: blogId })
      .populate('author', 'username name')
      .sort({ createAt: -1 });

    res.status(200).json({ success: true, comments });
    return;
  } catch (error) {
    console.error('Error in get all comments', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
