import { useScroll, useSpring, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PlusIcon from '../icons/PlusIcon';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const location = useLocation();

  const { user, logout } = useAuthStore();
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    
  }

  const navHeight = useTransform(scrollYProgress, [0, 0.1], ['5rem', '3.5rem']);
  const logoSize = useTransform(scrollYProgress, [0, 0.1], ['4xl', '2xl']);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.nav
      className="bg-gradient-to-t from-blue-300 to-white sticky top-0 z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: navHeight,
        boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
            font-bold font-grotesk cursor-pointer"
          animate={{
            textShadow: scrolled
              ? '0 0 8px rgba(59, 130, 246, 0.3)'
              : '0 0 0 rgba(0,0,0,0)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to={'/blogs'}>
            <motion.span
              className={`text-${scrolled ? '2xl' : '4xl'} sm:text-$
                {scrolled ? 'xl' : '3xl'} md:text-${scrolled ? '7xl' : '5xl'} lg:text-$
                {scrolled ? '5xl' : '6xl'} xl:text-${scrolled ? '7xl' : '5xl'} 2xl:text-$
                {scrolled ? '2xl' : '4xl'}`}
            >
              BlogSphere.
            </motion.span>
          </Link>
        </motion.div>

        <div className="flex items-center space-x-2 md:space-x-4">

        {user && (
            <motion.div 
              className="text-blue-700 border-blue-400 rounded-full border-2 font-semibold px-4 py-2 hidden sm:block"
              whileHover={{ scale: 1.05 }}
            >
              Welcome, {user}
            </motion.div>
          )}

          {user && location.pathname === `/blogs` && (
            <Link to={'/blogs/create'}>
              <motion.div
                className="bg-gradient-to-r from-blue-200 to-orange-100
                text-blue-700 space-x-2
                flex items-center justify-center
                font-semibold
                px-4
                py-2
                rounded-xl
                border-2 border-blue-600
                shadow-md"
                whileHover={{
                  scale: 1.05,
                  backgroundImage: 'linear-gradient(to right, #dbeafe, #fff7ed)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  y: { repeat: scrolled ? 0 : Infinity, repeatDelay: 5 },
                  duration: 0.5,
                }}
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PlusIcon />
                  </motion.div>
                </AnimatePresence>
                <motion.span
                  className="hidden sm:inline"
                  whileHover={{ textShadow: '0 0 8px rgba(37, 99, 235, 0.5)' }}
                >
                  Create Blog
                </motion.span>
              </motion.div>
            </Link>
          )}


          {user && (
            <motion.button
              className="bg-gradient-to-r from-blue-200 to-orange-100
              text-blue-700
              font-semibold
              px-4
              py-2
              rounded-xl
              border-2 border-blue-600
              shadow-md"
              whileHover={{
                scale: 1.05,
                backgroundImage: 'linear-gradient(to right, #dbeafe, #fff7ed)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              
            >
              Logout
            </motion.button>
          )}
        </div>
      </div>
      <motion.div
        style={{ scaleX }}
        className="h-1 bg-gradient-to-r from-purple-400 to-blue-700 origin-left z-11"
      />
    </motion.nav>
  );
};

export default Navbar;