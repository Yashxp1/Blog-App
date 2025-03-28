import AppLayout from './Layout/AppLayout';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';
import CreateBlog from './pages/CreateBlog';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/blogs',
        element: <Blogs />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/blogs/create',
    element: <CreateBlog />,
  },
]);

function App() {
  return (
    <div className=" bg-gradient-to-br from-blue-400 via-white to-purple-400 min-h-screen font-grotesk">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
