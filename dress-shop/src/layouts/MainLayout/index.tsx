import { Outlet } from 'react-router-dom';

// Components
import Footer from '../../components/Footer';
import HeaderContainer from '../HeaderLayout';

const MainLayout = (): JSX.Element => (
  <>
    <HeaderContainer />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;
