import { Container, Flex, Heading } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

// Components
import { LoadingIndicator } from "@/components";
const ProductListContainer = lazy(
  () => import("@/components/ProductListContainer"),
);

// Layouts
const Categories = lazy(() => import("@/layouts/Categories"));
const Carousel = lazy(() => import("@/layouts/Carousel"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<LoadingIndicator />}>
        <Carousel />
      </Suspense>
      <Container minH="100vh" pb="100px">
        <Flex flexDir="column" padding="0 20px">
          <Suspense fallback={<LoadingIndicator />}>
            <Categories />
          </Suspense>
          <Heading pb={{ xs: "0", lg: "20px" }} color="text.default">
            Product Overview
          </Heading>
          <Suspense fallback={<LoadingIndicator />}>
            <ProductListContainer />
          </Suspense>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
