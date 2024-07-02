import { Container } from "@chakra-ui/react";

// Components
import { Footer } from "@/components";

// Containers
import {
  HeaderContainer,
  SortBarContainer,
  ProductListContainer,
} from "@/Containers";

const ProductSearch = () => {
  return (
    <>
      <HeaderContainer />
      <Container minH="90vh" mb={{ xs: "50px", lg: "0px" }} p="0 15pt">
        <SortBarContainer />
        <ProductListContainer />
      </Container>
      <Footer />
    </>
  );
};

export default ProductSearch;
