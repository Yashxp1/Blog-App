import { Request, Response } from 'express';
import { AuthRequest } from '../lib/types';
import Post from '../model/post.model';

export const createBlog = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { title, image, content, tags } = req.body;

    if (!title || !content) {
      res.status(400).json({
        success: false,
        message: 'both title and content are required',
      });
    }

    if (!req.userID) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized. Please log in.',
      });
      return;
    }

    const post = await Post.create({
      title,
      content,
      image,
      tags,
      author: req.userID,
    });

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      post,
    });
  } catch (error) {
    console.error('Error in SIGNUP ', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const getAllBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const getPosts = await Post.find().populate('author', 'username name');
    res.status(200).json({ success: true, getPosts });
    return;
  } catch (error) {
    console.error('Error in SIGNUP ', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const getSinglePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id).populate(
      'author',
      'username name'
    );
    if (!post) {
      res.status(404).json({ success: false, message: 'Post not found' });
      return;
    }

    res.status(200).json({ success: true, post });
  } catch (error) {
    console.error('Error in get single post', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const updatePost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, content, image, tags } = req.body;

    if (!id) {
      res.status(404).json({ success: false, message: 'Post not found' });
      return;
    }

    const post = await Post.findById(id);

    if (!post) {
      res.status(401).json({
        success: false,
        message: 'Post not found.',
      });
      return;
    }

    if (post.author.toString() !== req.userID) {
      res.status(403).json({ success: false, message: 'Unauthorized' });
      return;
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.image = image || post.image;
    post.tags = tags || post.tags;

    await post.save();

    res.status(200).json({ success: true, post });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deletePost = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(404).json({ success: false, message: 'Post ID is required' });
    }

    const post = await Post.findById(id);

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

    if (post.author.toString() !== req.userID) {
      res.status(403).json({ success: false, message: 'Unauthorized' });
      return;
    }

    await post.deleteOne();
    res
      .status(200)
      .json({ success: true, message: 'Post deleted successfully' });
    return;
    
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
