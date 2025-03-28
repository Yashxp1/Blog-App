import React from 'react';
import {motion} from 'motion/react'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-grotesk p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          <motion.h2 className="text-5xl text-center font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">Login</motion.h2>
          
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input 
                type="text" 
                id="username" 
                className="w-full px-3 py-2 border-indigo-200 bg-white/20 backdrop-blur-md rounded-lg border-2 focus:ring-0 focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 bg-white/20 backdrop-blur-md rounded-lg border-2 border-indigo-200 focus:outline-none focus:ring-0"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex flex-col space-y-4">
              <button 
                type="submit" 
                className="w-full  bg-gradient-to-r from-blue-400 to-indigo-400 text-white py-2 rounded-lg hover:opacity-90 transition duration-300 ease-in-out"
              >
                Login
              </button>
              
              <div className="flex justify-center items-center space-x-2">
                <div className="h-px bg-gray-300 w-full"></div>
                <span className="text-gray-600">or</span>
                <div className="h-px bg-gray-300 w-full"></div>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition duration-300 ease-in-out"
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
