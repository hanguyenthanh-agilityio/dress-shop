import Carousel from "../../layouts/Carousel";
import { PRODUCTS } from "../../Mock/common";
import ProductList from "../../components/ProductList";
import { Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Carousel />
      <Container>
        <ProductList products={PRODUCTS} />
      </Container>
    </>

  )
}

export default Home;
