import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RightArrow from '../icons/RightArrow';
import { useEffect, useState } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      id: 1,
      title: 'Rich Text Editor',
      description: 'Create stunning content with our intuitive WYSIWYG editor.',
      icon: '📝',
    },
    {
      id: 2,
      title: 'SEO Optimization',
      description:
        'Built-in tools to help your content rank higher on search engines.',
      icon: '🔍',
    },
    {
      id: 3,
      title: 'Social Integration',
      description:
        'Share your posts directly to all your social media platforms.',
      icon: '🌐',
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Track your audience growth and engagement metrics.',
      icon: '📊',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Travel Blogger',
      text: 'BlogSphere helped me grow my audience by 300% in just 6 months!',
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Tech Writer',
      text: "The analytics and SEO tools are far better than any other platform I've used.",
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Food Blogger',
      text: 'The beautiful templates make my recipes look professional with minimal effort.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute w-full h-full"
        animate={{
          x: mousePosition.x / 50,
          y: mousePosition.y / 50,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      >
        <div className="absolute top-24 right-24 w-32 h-32 rounded-full bg-gradient-to-r from-pink-200 to-pink-300 opacity-20 blur-xl" />
        <div className="absolute bottom-24 left-24 w-40 h-40 rounded-full bg-gradient-to-r from-purple-200 to-purple-300 opacity-20 blur-xl" />
      </motion.div>

      <div className="flex justify-center items-center h-screen flex-col relative z-10">
        <motion.div
          whileHover={{
            scale: 1.1,
            background: 'linear-gradient(to right, #d0e9ff, #c0e0ff, #b0d8ff)',
            borderColor: '#1d4ed8',
          }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          className="bg-gradient-to-r border-blue-500 border-2 drop-shadow-2xl from-blue-100 via-blue-200 to-blue-300 p-6 rounded-xl"
        >
          <motion.h1
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
              text-4xl sm:text-7xl md:text-9xl lg:text-7xl xl:text-9xl 2xl:text-9xl
              font-bold font-grotesk"
            whileHover={{
              backgroundImage: 'linear-gradient(to right, #2563eb, #7c3aed)',
            }}
          >
            BlogSphere.
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 10,
            },
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          className="text-gray-700 text-center font-semibold font-grotesk mx-auto w-full max-w-xl py-4 text-base md:text-lg lg:text-xl relative"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A simple yet powerful blogging platform for creating, editing, and
            sharing thoughts effortlessly.
          </motion.span>
          <motion.span
            className="absolute -z-10 w-full h-3 bg-gradient-to-r from-pink-200 to-purple-200 opacity-50 left-0 bottom-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link to={'/register'}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-t from-pink-200 to-white
                text-orange-600
                font-semibold
                px-6 py-3
                rounded-xl
                hover:from-white hover:to-pink-300
                transition-all duration-300
                transform hover:scale-105
                active:scale-95
                w-38
                border-2 border-pink-500
                shadow-md hover:shadow-lg"
            >
              Register
            </motion.button>
          </Link>
          <Link to={'/login'}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-200 to-purple-300
                text-purple-800
                flex items-center justify-center gap-2
                px-6 py-3
                rounded-xl
                font-semibold
                hover:from-purple-300 hover:to-purple-400
                transition-all duration-300
                transform hover:scale-105
                active:scale-95
                border-2
                shadow-md hover:shadow-lg
                w-38
                focus:outline-none focus:ring-2 focus:ring-purple-300
                active:bg-gradient-to-r active:from-purple-250 active:to-purple-350"
            >
              {' '}
              Login
            </motion.button>
          </Link>
        </div>
      </div>

      <motion.section
        className="py-20 bg-gradient-to-b from-white to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800 font-grotesk relative"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Powerful Features
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-blue-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, backgroundColor: '#f0f9ff' }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gradient-to-b from-blue-50 to-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800 font-grotesk relative"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Users Say
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-purple-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-purple-300" />
                <div>
                  <h3 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {testimonial.role}
                  </p>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="text-blue-500 text-2xl absolute bottom-4 right-4 opacity-10">
                  ❝
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800 font-grotesk relative"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Features That Set Us Apart
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-blue-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Seamless Content Creation
              </h3>
              <ul className="space-y-3">
                {[
                  'Intuitive drag-and-drop editor',
                  'Custom templates for different post types',
                  'Markdown support for technical writers',
                  'Auto-save and version history',
                  'Collaborative editing for teams',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Growth Tools
              </h3>
              <ul className="space-y-3">
                {[
                  'Built-in SEO optimization suggestions',
                  'Social media scheduling and integration',
                  'Email newsletter management',
                  'Audience analytics and insights',
                  'Monetization options for creators',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-purple-500 font-bold">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
