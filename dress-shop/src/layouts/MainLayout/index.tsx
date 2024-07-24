import { Outlet } from "react-router-dom";

// Components
import { Footer } from "@/components";
import HeaderContainer from "@/components/HeaderContainer";

const MainLayout = () => {
  return (
    <>
      <HeaderContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
