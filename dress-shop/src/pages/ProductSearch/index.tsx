// import { lazy, Suspense } from "react";
import { Container } from "@chakra-ui/react";

// Components
import { SortBar } from "@/components";
import ProductListByCategory from "@/components/ProductListByCategory";

const ProductSearch = () => {
  return (
    <>
      <Container
        minH="90vh"
        mb={{ xs: "65px" }}
        pb="20px"
        p="0 15px"
        mt={{ lg: "80px" }}
      >
        <SortBar />
        <ProductListByCategory />
      </Container>
    </>
  );
};

export default ProductSearch;
