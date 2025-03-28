import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AppLayout = () => {
  return (
    <div>
      <main className="">
        <Navbar />
        <Outlet />
      </main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
