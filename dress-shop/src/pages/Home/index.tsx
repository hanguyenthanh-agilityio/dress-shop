import { Container, Flex, Heading } from "@chakra-ui/react";
import { lazy } from "react";

// Components
import ProductListContainer from "@/components/ProductListContainer";

// Layouts
const Categories = lazy(() => import("@/layouts/Categories"));
const Carousel = lazy(() => import("@/layouts/Carousel"));

const Home = () => {
  return (
    <>
      <Carousel />
      <Container pb="100px">
        <Flex flexDir="column" padding="0 20px">
          {/* Suspense */}
          <Categories />
          <Heading pb={{ xs: "0", lg: "20px" }} color="text.default">
            Product Overview
          </Heading>
          <ProductListContainer />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
