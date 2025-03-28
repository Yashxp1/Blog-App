import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center h-screen flex-col">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
          className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-6 rounded-xl"
        >
          <motion.h1
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent 
             text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 
             font-bold font-grotesk"
          >
            BlogSphere.
          </motion.h1>
        </motion.div>
        <p className="text-gray-500 text-center mx-auto w-full max-w-xl p-3 text-base md:text-lg lg:text-xl">
          A simple yet powerful blogging platform for creating, editing, and
          sharing thoughts effortlessly.
        </p>
      </div>
    </div>
  );
};

export default Home;
