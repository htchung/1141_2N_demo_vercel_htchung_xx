import { Outlet } from 'react-router-dom';
import Navbar_xx from '../components/Navbar_xx';

const HomeLayoutPage_xx = () => {
  return (
    <>
      <Navbar_xx />
      <Outlet />
    </>
  );
};

export default HomeLayoutPage_xx;
