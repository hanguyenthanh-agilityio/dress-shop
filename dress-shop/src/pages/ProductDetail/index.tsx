import { useParams } from "react-router-dom";

import { Container, Heading } from "@chakra-ui/react";

// Components
import { ProductList, LoadingIndicator } from "@/components";

// Pages
import { ProductDetailItem } from "@/pages";

// Mocks
import { PRODUCTS } from "@/mocks/common";

// Constants
import { ERROR_MESSAGE } from "@/constants";

// Hooks
import { useProductId } from "@/hooks/useProduct";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useProductId(productId);

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
      <Container minH="90vh" mt="80px" p={{ xs: "0 15px", md: "0 20px" }}>
        {!product ? (
          <Heading>{ERROR_MESSAGE}</Heading>
        ) : (
          <ProductDetailItem product={product} isLoading={isLoading} />
        )}

        <Heading py="10px" color="text.default">
          Related Product
        </Heading>
        <ProductList products={PRODUCTS} />
      </Container>
    </>
  );
};

export default ProductDetail;
