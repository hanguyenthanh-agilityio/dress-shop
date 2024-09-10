import { useParams } from "react-router-dom";
import { lazy, Suspense, useCallback } from "react";
import {
  Container,
  Flex,
  Heading,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

// Components
import { LoadingIndicator } from "@/components";

const ProductList = lazy(() => import("@/components/ProductList"));

// Pages
const ProductDetailItem = lazy(
  () => import("@/pages/ProductDetail/ProductDetailItem"),
);

// Constants
import { ERROR_MESSAGE } from "@/constants";

// Hooks
import { useProductId, useProducts } from "@/hooks";

const ProductDetail = () => {
  const { productId } = useParams();
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleError = useCallback((error: string) => {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }, []);

  const { data: products } = useProducts({ limit: 8 }, handleError);

  const { data: product, isLoading } = useProductId(productId, handleError);

  const relatedProduct = products.filter(
    (item) => item.category === product?.category && item.id !== product?.id,
  );

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
      <Container
        minH="90vh"
        mt={{ lg: "80px" }}
        p={{ xs: "0 15px", md: "0 20px" }}
      >
        {!product ? (
          <Heading>{ERROR_MESSAGE}</Heading>
        ) : (
          <Suspense fallback={<LoadingIndicator />}>
            <ProductDetailItem
              product={product}
              isLoading={isLoading}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Suspense>
        )}
        <Flex mb="20px" flexDir="column">
          <Heading py="15px" color="text.default">
            Related Product
          </Heading>
          <Suspense fallback={<LoadingIndicator />}>
            <Flex data-testid="product-list">
              <ProductList products={relatedProduct} />
            </Flex>
          </Suspense>
        </Flex>
      </Container>
    </>
  );
};

export default ProductDetail;
