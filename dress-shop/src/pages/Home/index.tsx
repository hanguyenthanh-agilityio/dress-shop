import { Button, Container, Flex, Heading } from "@chakra-ui/react";

// Components
import Footer from "@/components/Footer";

// Containers
import HeaderContainer from "@/Containers/HeaderContainer";
import ProductListContainer from "@/Containers/ProductListContainer";

// Layouts
import Carousel from "@/layouts/Carousel";
import Categories from "@/layouts/Categories";

const Home = () => {
  const handleOnClick = () => {};

  return (
    <>
      <HeaderContainer />
      <Carousel />
      <Container pb="100px">
        <Flex flexDir="column">
          <Categories />
          <Heading>Product Overview</Heading>
          <ProductListContainer />
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
      <Footer />
    </>
  );
};

export default Home;
