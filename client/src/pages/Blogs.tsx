import React, { useEffect } from 'react';
import { useBlogStore } from '../store/fetchBlogs';
import { motion } from 'motion/react';

const Blogs = () => {
  const { blogs, getBlogs } = useBlogStore();

  useEffect(() => {
    getBlogs();
  }, [ getBlogs]);

  return (
    <div className=" min-h-screen w-full p-4">
      <h1
        className="lg:text-9xl text-7xl font-bold p-2
        bg-gradient-to-b from-blue-700 to-purple-400
        bg-clip-text text-transparent text-center mb-8"
      >
        Explore
      </h1>

      <div className="mt-8 flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {blogs.length === 0 ? (
          <h2 className="text-2xl font-bold text-white bg-blue-600 p-4 rounded-lg">
            NO Blogs Found
          </h2>
        ) : (
          blogs.map((blog) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              key={blog._id}
              className="w-full cursor-pointer border-blue-300 border-2 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-blue-300 to-white p-6"
            >
              <h2 className="text-4xl font-bold text-blue-800">{blog.title}</h2>

              <h3 className="text-lg mt-1 text-blue-600 ">
                Author: {blog.author.username}
              </h3>

              <span className="font-light">
                <p className='text-sm py-1'>Published: {new Date(blog.createdAt).toLocaleDateString()}</p>

                {blog.tags && blog.tags.length > 0 && (
                  <span className="text-purple-700 px-2 rounded-md bg-purple-200 border-2 font-sm text-sm">
                    {blog.tags.join(', ')}
                  </span>
                )}
              </span>

              {/* {blog.image ? (
                <div className="flex justify-center my-4">
                  <img
                    src={blog.image}
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                    className="w-full h-auto max-w-md rounded-lg object-cover shadow-md"
                    alt={blog.title || 'Blog image'}
                  />
                </div>
              ) : null} */}

              <p className="text-gray-700 mt-4 leading-relaxed">
                {blog.content.split(' ').slice(0, 25).join(' ')}
                {blog.content.split(' ').length > 25 ? '...' : ''}
              </p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
