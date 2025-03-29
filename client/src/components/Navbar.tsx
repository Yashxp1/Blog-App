import { useScroll, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav className=" bg-gradient-to-t from-blue-300 to-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div
          className="bg-gradient-to-r p-4 from-blue-500 to-purple-500 bg-clip-text text-transparent 
             text-4xl sm:text-3xl md:text-9xl lg:text-7xl xl:text-9xl 2xl:text-4xl 
             font-bold font-grotesk cursor-pinter"
        >
          <Link to={'/'}>BlogSphere.</Link>
        </div>

        <button 
          className="bg-gradient-to-r from-blue-200 to-orange-100 
             text-blue-700 
             font-semibold
             px-6 py-3 
             rounded-xl
             hover:from-blue-200 hover:to-white 
             transition-all duration-300 
             transform hover:scale-105 
             active:scale-95 
             w-38
             border-2 border-blue-600
             shadow-md hover:shadow-lg"
        >
          Create Blog
        </button>
      </div>
      <motion.div
        style={{ scaleX }}
        className="h-1 bg-gradient-to-r from-purple-400 to-blue-700 origin-left z-11"
      />
    </nav>
  );
};

export default Navbar;
