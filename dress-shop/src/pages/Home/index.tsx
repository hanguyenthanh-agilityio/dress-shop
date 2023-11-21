import { Button, Container, Flex, Heading } from "@chakra-ui/react";

// Components
import ProductList from "@/components/ProductList";

// Layouts
import Carousel from "@/layouts/Carousel";
import Categories from "@/layouts/Categories";

// Mocks
// import { PRODUCTS } from "@/Mock/common";
// import { useProductList } from "@/apis/app";
// import { useCallback, useState } from "react";
// import LoadingIndicator from "@/components/LoadingIndicator";
// import { Params } from "@/types/common";

const Home = () => {
  // const toast = useToast();
  // const initial = {
  //   page: 1,
  //   limit: 8,
  // }

  // const [filter, setFilter] = useState<Params>(initial);


  // const handleError = useCallback((error: string) => {
  //   toast({
  //     title: error,
  //     status: "error",
  //     isClosable: true,
  //   });
  // }, []);

  // const {isLoading, data: products} = useProductList(filter , handleError)
  // console.log(products);

  const handleOnClick = () => {
    // setFilter({ ...filter, page: Number(filter.page) + 1 });
  };

  return (
    <>
      <Carousel />
      <Container pb="100px">
        <Flex flexDir="column">
          <Categories />
          <Heading>Product Overview</Heading>
          {/* {isLoading ? ( */}
            {/* <LoadingIndicator /> */}
            {/* ) : ( */}
            <ProductList />
          {/* )} */}
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
