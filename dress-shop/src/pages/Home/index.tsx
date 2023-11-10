import { PRODUCTS } from "../../Mock/common";
import ProductList from "../../components/ProductList";
import { Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
      <ProductList products={PRODUCTS} />
    </Container>
  )
}

export default Home;
