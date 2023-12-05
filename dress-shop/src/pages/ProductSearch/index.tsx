import { Container } from "@chakra-ui/react";

// Components
import Footer from "@/components/Footer";

// Containers
import HeaderContainer from "@/containers/HeaderContainer";
import SortBarContainer from "@/containers/SortBarContainer";
import ProductListContainer from "@/containers/ProductListContainer";

const ProductSearch = () => {
  return (
    <>
      <HeaderContainer />
      <Container minH="90vh" mb={{ xs: "50px", lg: "0px" }}>
        <SortBarContainer />
        <ProductListContainer />
      </Container>
      <Footer />
    </>
  );
};

export default ProductSearch;
