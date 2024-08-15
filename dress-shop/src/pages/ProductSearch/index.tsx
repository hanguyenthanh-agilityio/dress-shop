import { lazy, Suspense } from "react";
import { Container } from "@chakra-ui/react";

// Components
import { LoadingIndicator, SortBar } from "@/components";
const ProductListContainer = lazy(
  () => import("@/components/ProductListContainer"),
);

const ProductSearch = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log("urlParams", urlParams.get("order"));

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
        <Suspense fallback={<LoadingIndicator />}>
          <ProductListContainer />
        </Suspense>
      </Container>
    </>
  );
};

export default ProductSearch;
