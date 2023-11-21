import { Button, Container, Flex, Heading, useToast } from "@chakra-ui/react";

// Components
import ProductList from "@/components/ProductList";

// Layouts
import Carousel from "@/layouts/Carousel";
import Categories from "@/layouts/Categories";

// Mocks
// import { PRODUCTS } from "@/Mock/common";
import { useProductList } from "@/apis/app";
import { useCallback } from "react";

const Home = () => {
  const toast = useToast();

  const handleError = useCallback((error: string) => {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }, []);

  const {data: products} = useProductList(handleError)
  const handleOnClick = () => {};



  return (
    <>
      <Carousel />
      <Container pb="100px">
        <Flex flexDir="column">
          <Categories />
          <Heading>Product Overview</Heading>
          <ProductList products={products} />
          <Flex justifyContent="center" my="50px">
            <Button
              size={{ xs: "small", md: "default" }}
              variant="secondary"
              onClick={handleOnClick}
            >
              Load More
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
