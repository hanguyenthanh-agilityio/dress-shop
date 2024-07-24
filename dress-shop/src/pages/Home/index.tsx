import { Container, Flex, Heading } from "@chakra-ui/react";

// Components
import { Footer, LoadingIndicator } from "@/components";

// Containers
import { HeaderContainer } from "@/Containers";
const ProductListContainer = lazy(
  () => import("../../Containers/ProductListContainer"),
);

// Layouts
// import Carousel from "@/layouts/Carousel";
import Categories from "@/layouts/Categories";
import { lazy, Suspense } from "react";

const Carousel = lazy(() => import("../../layouts/Carousel"));

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <Suspense fallback={<LoadingIndicator />}>
        <Carousel />
      </Suspense>

      <Container pb="100px">
        <Flex flexDir="column" padding="0 20px">
          <Categories />
          <Heading pb="20px">Product Overview</Heading>
          <Suspense fallback={<LoadingIndicator />}>
            <ProductListContainer />
          </Suspense>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
