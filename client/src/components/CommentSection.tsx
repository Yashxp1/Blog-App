import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCommentStore } from '../store/commentStore';

const CommentSection = () => {
  const { createComment, getComments, comments } = useCommentStore();
  const { id: blogId } = useParams();
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (blogId) {
      getComments(blogId);
    }
  }, [blogId, getComments]);

  const handleCreateComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) {
      toast.warning('Please enter a comment');
      return;
    }

    try {
      const success = await createComment(blogId, comment);
      if (success) {
        toast.success('Comment added successfully');
        setComment('');
        getComments(blogId);
      } else {
        toast.error('Error adding comment');
      }
    } catch (error) {
      toast.error('Server Error');
      console.error('Error while creating a comment:', error);
    }
  };

  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="py-8">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Comments</h3>

      <div
        className="backdrop-blur-xl bg-white/10 p-6 rounded-xl shadow-lg border border-white/20"
        style={{
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <form onSubmit={handleCreateComment} className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full bg-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 border border-white/30"
              style={{
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            />
            <button
              type="submit"
              className="absolute right-3 top-2 text-white px-4 py-1 rounded-lg transition-all hover:shadow-md"
              style={{
                color: '#1e3a8a',
                fontWeight: 'bold',
                textShadow: '0 0 2px rgba(255,255,255,0.5)',
              }}
            >
              Post
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {sortedComments.length > 0 ? (
            sortedComments.map((cmt) => (
              <div
                key={cmt._id}
                className="bg-white/20 p-4 rounded-lg border border-white/30 transition-all hover:shadow-md"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                }}
              >
                <p className="text-gray-800 mb-2">{cmt.content}</p>
                <div className="flex justify-between items-center">
                  <small className="text-gray-600 text-xs">
                    {new Date(cmt.createdAt).toLocaleString()} <br />
                    <span className='text-xs'>{cmt.author.name}</span>
                  </small>
                  
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CommentSection;
