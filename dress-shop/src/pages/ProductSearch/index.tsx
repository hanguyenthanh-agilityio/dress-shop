import { Container } from "@chakra-ui/react";

// Components
import SortBarContainer from "@/components/SortBarContainer";
import ProductListContainer from "@/components/ProductListContainer";

// Containers

const ProductSearch = () => {
  return (
    <>
      <Container minH="90vh" mb={{ xs: "50px", lg: "0px" }} p="0 15pt">
        <SortBarContainer />
        <ProductListContainer />
      </Container>
    </>
  );
};

export default ProductSearch;
