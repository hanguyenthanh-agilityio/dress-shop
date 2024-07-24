import { Outlet } from "react-router-dom";

// Components
import { Header, Footer } from "@/components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
