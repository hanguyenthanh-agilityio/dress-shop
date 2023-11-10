import Carousel from "../../layouts/Carousel";
import { PRODUCTS } from "../../Mock/common";
import ProductList from "../../components/ProductList";
import { Container } from "@chakra-ui/react";
import Categories from "../../layouts/Categories";

const Home = () => {
  return (
    <>
      <Carousel />
      <Container>
        <Categories />
        <ProductList products={PRODUCTS} />
      </Container>
    </>

  )
}

export default Home;
