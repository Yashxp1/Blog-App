import mongoose, { model, Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
    },
  },
  { timestamps: true }
);

const Comment = model('Comment', commentSchema);

export default Comment;
