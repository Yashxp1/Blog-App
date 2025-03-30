import AppLayout from './Layout/AppLayout';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';
import CreateBlog from './pages/CreateBlog';
import GetSingleBlog from './pages/GetSingleBlog';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogs/:id',
        element: (
          <ProtectedRoute>
            <GetSingleBlog />
          </ProtectedRoute>
        ),
      },
      {
        path: '/blogs/create',
        element: <CreateBlog />,
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
]);

function App() {
  return (
    <div className=" bg-gradient-to-br from-blue-400 via-white to-purple-400 min-h-screen font-grotesk">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
