import { Container } from "@chakra-ui/react";

// Components
import Footer from "@/components/Footer";
import HeaderContainer from "@/Containers/HeaderContainer";
import SortBarContainer from "@/Containers/SortBarContainer";
import ProductListContainer from "@/Containers/ProductListContainer";

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
