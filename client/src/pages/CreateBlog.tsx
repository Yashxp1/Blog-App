import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlogStore } from '../store/fetchBlogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateBlog = () => {
  const { createBlog } = useBlogStore();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');

  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();

    const tagsArray = tags.split(',').map((tag) => tag.trim());

    try {
      const success = await createBlog(title, content, image, tagsArray);

      if (success) {
        toast.success('You have created a blog successfully!');
      } else {
        toast.error('Failed to create Blog. Try again!');
      }
    } catch (error) {
      console.error('Error while creating a blog:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <ToastContainer />
      <div className="w-full max-w-2xl backdrop-blur-lg bg-white/30 rounded-xl shadow-lg p-8 border border-white/40">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-300 text-transparent bg-clip-text">
          Create New Blog
        </h1>

        <form onSubmit={handleCreateBlog}>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title <span className="text-red-500">*</span>
              </label>
              <input
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                name="title"
                className="w-full px-4 py-2 rounded-lg bg-white/50 border focus:outline-none border-purple-300 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Content <span className="text-red-500">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                value={content}
                required
                onChange={(e) => setContent(e.target.value)}
                rows="6"
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="Write your blog content here..."
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="imageLink"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image Link
              </label>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                id="imageLink"
                name="imageLink"
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="Enter image URL"
              />
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tags
              </label>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                type="text"
                id="tags"
                name="tags"
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="Enter tags separated by commas"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-md backdrop-blur-sm transition duration-300 ease-in-out"
              >
                Create Blog
              </button>
            </div>
          </div>
        </form>
        <div className="mt-10">
          <button
            type="submit"
            className=" py-3 px-4 bg-gradient-to-r from-yellow-400 border-orange-400 to-orange-400 hover:from-yellow-300  hover:to-orange300 text-white font-medium rounded-lg shadow-md backdrop-blur-sm transition duration-300 ease-in-out border-2"
          >
            {' '}
            <Link to={'/blogs'}>Go back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
