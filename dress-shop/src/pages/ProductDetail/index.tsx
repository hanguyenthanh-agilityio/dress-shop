import { useParams } from "react-router-dom";
import { lazy, Suspense, useCallback, useMemo } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

// Components
import { IconHeart, LoadingIndicator } from "@/components";

const ProductList = lazy(() => import("@/components/ProductList"));
const ModalForm = lazy(() => import("@/components/ModalForm"));

// Constants
import { ERROR_MESSAGE, FALLBACK_SRC } from "@/constants";

// Hooks
import { useProductId, useProducts, useUpdateProduct } from "@/hooks";
import { UseCartContext } from "@/stores";
import { Product } from "@/types";
import { AxiosError } from "axios";

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

  const { mutate: updateProduct, isLoading: isLoadingUpdate } =
    useUpdateProduct();

  const { handleAddToCart } = UseCartContext();

  const relatedProduct = useMemo(
    () =>
      products.filter(
        (item) =>
          item.category === product?.category && item.id !== product?.id,
      ),
    [products, product],
  );

  // Handle add product to cart
  const handleAddProduct = useCallback(
    (product: Product) => {
      handleAddToCart(product);
      toast({
        title: "Successfully add to cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    [handleAddToCart, toast],
  );

  // Show message when update success and close modal
  const handleUpdateSuccess = useCallback(() => {
    onClose();
    toast({
      title: "Product updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [onClose, toast]);

  // handle Update Product
  const handleUpdate = useCallback(
    (product: Product) => {
      if (product.id) {
        updateProduct(product, {
          onSuccess: handleUpdateSuccess,
          onError: (error) => handleError((error as AxiosError).message),
        });
      }
    },
    [updateProduct, handleUpdateSuccess, handleError],
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
          <Flex flexDir={{ xs: "column", lg: "row" }}>
            <Box>
              <Image
                src={product.imageURL}
                w="100%"
                h="100%"
                objectFit="cover"
                p={{ xs: "0", lg: "20px 20px 20px 0" }}
                fallbackSrc={FALLBACK_SRC}
              />
            </Box>
            <Flex
              flexDir="column"
              p={{ xs: "16px 0", lg: "20px 0 20px 0" }}
              w={{ xs: "100%", lg: "580px" }}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Heading
                  color="text.default"
                  size={{ xs: "medium", lg: "default" }}
                >
                  {product.name}
                </Heading>
                <IconHeart />
              </Flex>

              <Text
                size={{ xs: "default", md: "large" }}
                variant="primary"
                py={{ xs: "16px", lg: "20px" }}
              >
                P{product.price}
              </Text>
              <Text color="#666" size={{ xs: "tiny", lg: "medium" }}>
                {product.description}
              </Text>
              {/* <Quantity /> */}
              <Flex my="10px">
                <Button
                  variant="add"
                  size={{ xs: "small", lg: "default" }}
                  p={{ xs: "10px 30px", sm: "20px 40px", lg: "25px 60px" }}
                  mr="10px"
                  border="none"
                  isLoading={isLoading}
                  onClick={() => handleAddProduct(product)}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="add"
                  bg="none"
                  color="text.default"
                  p="0 20px"
                  size={{ xs: "small", lg: "default" }}
                  onClick={onOpen}
                >
                  Edit product
                </Button>
                <Suspense fallback={<LoadingIndicator />}>
                  {isOpen && (
                    <ModalForm
                      modalTitle="Update product"
                      buttonLabel="Confirm"
                      onClose={onClose}
                      productItem={product}
                      onConfirm={handleUpdate}
                      isLoading={isLoadingUpdate}
                    />
                  )}
                </Suspense>
              </Flex>
            </Flex>
          </Flex>
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
