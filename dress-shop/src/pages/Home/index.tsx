import { Container, Flex, Heading } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

// Components
import { Footer, LoadingIndicator } from "@/components";

// Containers
import { HeaderContainer } from "@/Containers";
const ProductListContainer = lazy(
  () => import("../../Containers/ProductListContainer"),
);

// Layouts

const Categories = lazy(() => import("../../layouts/Categories"));
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
          <Suspense fallback={<LoadingIndicator />}>
            <Categories />
          </Suspense>
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
