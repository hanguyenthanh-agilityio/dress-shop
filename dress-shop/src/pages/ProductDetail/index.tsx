import { useParams } from "react-router-dom";

import { Container, Heading } from "@chakra-ui/react";

// Components
import {
  ProductList,
  ProductDetailItem,
  LoadingIndicator,
  Footer,
} from "@/components";

// Containers
import { HeaderContainer } from "@/Containers";

// APIs
import { useProductById } from "@/apis/app";

// Mocks
import { PRODUCTS } from "@/mocks/common";

// Constants
import { ERROR_MESSAGE } from "@/constants";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useProductById(productId);

  if (isLoading)
    return (
      <Container
        minH="100vh"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <LoadingIndicator />
      </Container>
    );

  return (
    <>
      <HeaderContainer />
      <Container minH="90vh" mb="80px" p={{ xs: "0 15pt", md: "0 20pt" }}>
        {!product ? (
          <Heading>{ERROR_MESSAGE}</Heading>
        ) : (
          <ProductDetailItem product={product} isLoading={isLoading} />
        )}

        <Heading pb="10px">Related Product</Heading>
        <ProductList products={PRODUCTS} />
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
