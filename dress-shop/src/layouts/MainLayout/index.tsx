import { Outlet, useLocation } from "react-router-dom";

// Components
import { Header, Footer } from "@/components";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = () => {
  return (
    <Box bg="brand.900">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
