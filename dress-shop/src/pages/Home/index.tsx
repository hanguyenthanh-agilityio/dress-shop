import { Button, Container, Flex } from "@chakra-ui/react";

// Components
import ProductList from "../../components/ProductList";

// Layouts
import Carousel from "../../layouts/Carousel";
import Categories from "../../layouts/Categories";

// Mocks
import { PRODUCTS } from "../../Mock/common";

const Home = () => {
  const handleOnClick = () => {}

  return (
    <>
      <Carousel />
      <Container pb="100px">
        <Flex flexDir="column">
        <Categories />
        <ProductList products={PRODUCTS} />
        <Flex justifyContent="center" my="50px">
          <Button variant="secondary" onClick={handleOnClick}>Load More</Button>
        </Flex>
        </Flex>

      </Container>
    </>

  )
}

export default Home;
