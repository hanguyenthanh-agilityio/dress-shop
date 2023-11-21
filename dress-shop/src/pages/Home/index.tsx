import { Container } from "@chakra-ui/react";

// Components
import ProductList from "@/components/ProductList";
import Quantity from "@/components/Quantity";

// Layouts
import Carousel from "@/layouts/Carousel";
import Categories from "@/layouts/Categories";

// Mocks
import { PRODUCTS } from "@/Mock/common";

const Home = () => {
  return (
    <>
      <Carousel />
      <Container>
        <Quantity />
        <Categories />
        <ProductList products={PRODUCTS} />
      </Container>
    </>
  );
};

export default Home;
