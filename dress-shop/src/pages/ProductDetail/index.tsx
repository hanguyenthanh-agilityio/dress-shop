import { useParams } from "react-router-dom";
import { lazy, Suspense, useCallback, useMemo } from "react";
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

  const memoizedProductId = useMemo(() => productId, [productId]);

  const handleError = useCallback(
    (error: string) => {
      toast({
        title: error,
        status: "error",
        isClosable: true,
      });
    },
    [toast],
  );

  const { data: products } = useProducts({ limit: 8 }, handleError);

  const { data: product, isLoading } = useProductId(
    memoizedProductId,
    handleError,
  );

  const relatedProduct = useMemo(
    () =>
      products.filter(
        (item) =>
          item.category === product?.category && item.id !== product?.id,
      ),
    [products, product],
  );

  const memoizedOnOpen = useCallback(onOpen, [onOpen]);
  const memoizedOnClose = useCallback(onClose, [onClose]);

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
          <Suspense fallback={<LoadingIndicator data-testid="spinner" />}>
            <ProductDetailItem
              product={product}
              isLoading={isLoading}
              isOpen={isOpen}
              onOpen={memoizedOnOpen}
              onClose={memoizedOnClose}
            />
          </Suspense>
        )}
        <Flex mb="20px" flexDir="column">
          <Heading py="15px" color="text.default">
            Related Product
          </Heading>
          <Suspense fallback={<LoadingIndicator />}>
            <Flex flexDir="column" data-testid="product-list">
              <ProductList products={relatedProduct} />
            </Flex>
          </Suspense>
        </Flex>
      </Container>
    </>
  );
};

export default ProductDetail;
