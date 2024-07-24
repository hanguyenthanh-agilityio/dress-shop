import { Container } from "@chakra-ui/react";

// Components
import { Footer } from "@/components";
import HeaderContainer from "@/components/HeaderContainer";
import SortBarContainer from "@/components/SortBarContainer";
import ProductListContainer from "@/components/ProductListContainer";

// Containers

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
