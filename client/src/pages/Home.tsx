import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center h-screen flex-col">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          className="bg-gradient-to-r border-blue-500 border-2 drop-shadow-lg from-blue-100 via-blue-200 to-blue-300 p-6 rounded-xl"
        >
          <motion.h1
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent 
             text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 
             font-bold font-grotesk "
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
          className="text-gray-400 text-center font-semibold font-zilla mx-auto w-full max-w-xl py-4 text-base md:text-lg lg:text-xl"
        >
          A simple yet powerful blogging platform for creating, editing, and
          sharing thoughts effortlessly.
        </motion.p>
        <div className='flex flex-col sm:flex-row gap-4 mt-10'>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 
             text-white 
             font-semibold
             px-6 py-3 
             rounded-xl
             hover:from-blue-600 hover:to-purple-700 
             transition-all duration-300 
             transform hover:scale-105 
             active:scale-95 
             w-38
             shadow-md hover:shadow-lg"
          >
            Start Reading
          </button>
          <button
            className="bg-gradient-to-r from-purple-200 to-purple-300 
             text-purple-800 
             px-6 py-3 
             rounded-xl
             font-semibold
             hover:from-purple-300 hover:to-purple-400 
             transition-all duration-300 
             transform hover:scale-105 
             active:scale-95 
             shadow-md hover:shadow-lg 
              
             w-38
             focus:outline-none focus:ring-2 focus:ring-purple-300 
             active:bg-gradient-to-r active:from-purple-250 active:to-purple-350"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
