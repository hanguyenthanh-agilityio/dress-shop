import { useParams } from "react-router-dom";

import { Container, Heading } from "@chakra-ui/react";

// Components
import { ProductList, LoadingIndicator, Footer } from "@/components";

// Containers
import { HeaderContainer } from "@/Containers";

// APIs
import { useProductById } from "@/apis/app";

// Mocks
import { PRODUCTS } from "@/mocks/common";

// Constants

import ProductDetailItem from "./ProductDetailItem";

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
      <Container minH="90vh" mb="80px">
        {!product ? (
          <div>Error</div>
        ) : (
          <ProductDetailItem
            product={product}
            imageURL={product.imageURL}
            name={product.name}
            price={0}
            isLoading={false}
          />
        )}

        <Heading pb="10px">Related Product</Heading>
        <ProductList products={PRODUCTS} />
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
