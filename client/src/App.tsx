import AppLayout from './Layout/AppLayout';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register/>,
  },
]);

function App() {
  return (
    <div className=" bg-gradient-to-br from-blue-400 via-white to-purple-400 min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
