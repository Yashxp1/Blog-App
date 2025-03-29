import React, { useEffect } from 'react';
import { useBlogStore } from '../store/fetchBlogs';
import { motion } from 'motion/react';

const Blogs = () => {
  const { blogs, getBlogs } = useBlogStore();

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

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
            whileHover={{ 
              scale: 1.01, 
              backgroundColor: "#f0f9ff",
              backgroundImage: "linear-gradient(to bottom, #e0d9ff, #cfe8ff)"
,
              borderColor: "#3b82f6",
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={blog._id}
            className="w-full cursor-pointer border-blue-200 border-2 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-blue-100 to-pink-100 p-6"
          >
            <motion.h2 
              className="text-4xl font-bold text-blue-800"
              whileHover={{ color: "#1e40af" }}
            >
              {blog.title}
            </motion.h2>
            
            <motion.h3 
              className="text-lg mt-1 text-blue-600"
              whileHover={{ color: "#2563eb" }}
            >
              Author: {blog.author.username}
            </motion.h3>
            
            <span className="font-light">
              <p className="text-sm py-1">
                Published: {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              
              {blog.tags && blog.tags.length > 0 && (
                <motion.span 
                  className="text-purple-700 px-2 rounded-md bg-purple-200 border-2 font-sm text-sm"
                  whileHover={{ 
                    backgroundColor: "#e9d5ff", 
                    color: "#6b21a8" 
                  }}
                >
                  {blog.tags.join(', ')}
                </motion.span>
              )}
            </span>
            
            <motion.p 
              className="text-gray-700 mt-4 leading-relaxed"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {blog.content.split(' ').slice(0, 25).join(' ')}
              {blog.content.split(' ').length > 25 ? '...' : ''}
            </motion.p>
          </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
