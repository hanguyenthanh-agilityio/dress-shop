import { Container, Flex, Heading } from "@chakra-ui/react";

// Components
import { Footer } from "@/components";

// Containers
import { HeaderContainer, ProductListContainer } from "@/Containers";

// Layouts
import Carousel from "@/layouts/Carousel";
import Categories from "@/layouts/Categories";

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <Carousel />
      <Container pb="100px">
        <Flex flexDir="column" padding="0 20px">
          <Categories />
          <Heading pb="20px">Product Overview</Heading>
          <ProductListContainer />
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
