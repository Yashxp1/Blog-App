import React from 'react';
import { Link } from 'react-router-dom';

const CreateBlog = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="w-full max-w-2xl backdrop-blur-lg bg-white/30 rounded-xl shadow-lg p-8 border border-white/40">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create New Blog
        </h1>

        <form>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title <span className="text-red-500">*</span>
              </label>
              <input
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
