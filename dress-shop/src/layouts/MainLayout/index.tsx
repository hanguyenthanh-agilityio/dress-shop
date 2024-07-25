import { Outlet } from "react-router-dom";

// Components
import { Header, Footer } from "@/components";
import { Box } from "@chakra-ui/react";

const MainLayout = () => {
  return (
    <Box bg="brand.900">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
