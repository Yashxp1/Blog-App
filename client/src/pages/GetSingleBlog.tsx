import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogStore } from '../store/fetchBlogs';
import { motion } from 'motion/react';
import CommentSection from '../components/CommentSection';

const GetSingleBlog = () => {
  const { id } = useParams();
  const { singleBlog, getSingleBlog } = useBlogStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getSingleBlog(id).finally(() => setLoading(false));
    }
  }, [id, getSingleBlog]);

  if (loading || !singleBlog) return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold text-blue-600">Loading...</h1>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        whileHover={{
          scale: 1.01,
          backgroundColor: '#f0f9ff',
          backgroundImage: 'linear-gradient(to bottom, #e0d9ff, #cfe8ff)',
          borderColor: '#3b82f6',
          y: -5,
          boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
        }}
        whileTap={{ scale: 0.99 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full border-blue-200 border-2 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-blue-100 to-pink-100 p-6 md:p-8"
      >
        {/* Featured image */}
        {singleBlog.image && (
          <motion.div 
            className="mb-6 overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          > {loading ? "Fetching Image" : <img 
            src={singleBlog.image} 
            alt={singleBlog.title} 
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />}
            {/* // <img 
            //   src={singleBlog.image} 
            //   alt={singleBlog.title} 
            //   className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            // /> */}
          </motion.div>
        )}

        <motion.h2
          className="text-2xl md:text-4xl font-bold text-blue-800 mb-3"
          whileHover={{ color: '#1e40af' }}
        >
          {singleBlog.title}
        </motion.h2>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <motion.h3
            className="text-md md:text-lg text-blue-600"
            whileHover={{ color: '#2563eb' }}
          >
            Author: {singleBlog.author.username}
          </motion.h3>
          
          <span className="font-light mt-2 sm:mt-0">
            <p className="text-sm py-1">
              Published: {new Date(singleBlog.createdAt).toLocaleDateString()}
            </p>
          </span>
        </div>
        
        {singleBlog.tags && singleBlog.tags.length > 0 && (
          <div className="mb-4">
            {singleBlog.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="text-purple-700 px-2 py-1 mr-2 mb-2 inline-block rounded-md bg-purple-200 border-2 text-sm"
                whileHover={{
                  backgroundColor: '#e9d5ff',
                  color: '#6b21a8',
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
        
        <motion.div
          className="text-gray-700 mt-4 leading-relaxed prose max-w-none"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        >
          {/* Display full content with proper paragraph formatting */}
          {singleBlog.content.split('\n').map((paragraph, index) => (
            paragraph ? <p key={index} className="mb-4">{paragraph}</p> : <br key={index} />
          ))}
        </motion.div>
      </motion.div>

      <div>
      <CommentSection></CommentSection>
      </div>
    </div>
  );
};

export default GetSingleBlog;