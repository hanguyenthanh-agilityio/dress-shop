import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MainLayout = (): JSX.Element => (
  <>
    <Header />
      <Outlet />
    <Footer />
  </>
);

export default MainLayout;
