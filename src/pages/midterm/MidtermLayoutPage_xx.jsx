import { Outlet } from 'react-router-dom';
import NavbarShop_xx from '../../components/midterm/NavbarShop_xx';
import Wrapper from '../../assets/wrappers/midterm/Shop_xx';

const MidtermLayoutPage_xx = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <NavbarShop_xx />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default MidtermLayoutPage_xx;
