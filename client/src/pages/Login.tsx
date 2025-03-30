import { motion } from 'motion/react';
import { useAuthStore } from '../store/useAuthStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const [laoding, setLoading] = useState<boolean>(false)

    

  const login = useAuthStore((state) => state.login);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const success = await login(username, password);
      if (success) {
        toast.success('You have logged in successfully!');
        navigate('/blogs');
      } else {
        toast.error('Incorrect username or password. Try again!');
      }
    } catch (error) {
      alert('Try again! Incorrect username or password.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-grotesk p-4">
      <ToastContainer />
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          <motion.h2 className="text-5xl text-center font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Login
          </motion.h2>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username
              </label>
              <input
                required={true}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                className="w-full px-3 py-2 border-indigo-200 bg-white/20 backdrop-blur-md rounded-lg border-2 focus:ring-0 focus:outline-none"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            </div>
          </form>
          <button
            onClick={() => navigate('/register')}
            type="button"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition duration-300 ease-in-out"
          >
            Create New Account
          </button>
        </div>
      </div>



    </div>
  );
};

export default Login;
