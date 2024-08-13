import { lazy, Suspense, useCallback } from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  useToast,
  // useToast,
} from "@chakra-ui/react";

// Components
import { IconHeart, LoadingIndicator, Quantity } from "@/components";
const ModalForm = lazy(() => import("@/components/ModalForm"));

// Stores
import { UseCartContext } from "@/stores";

// Constants
import { FALLBACK_SRC } from "@/constants";

// Types
import { Product } from "@/types";
import { useUpdateProductMutation } from "@/hooks";
import { AxiosError } from "axios";

interface ProductDetailItemPros {
  product: Product;
  isLoading: boolean;
}

const ProductDetailItem = ({ product, isLoading }: ProductDetailItemPros) => {
  // Destructuring prop
  const { imageURL, name, price, description } = product;

  const { handleAddToCart } = UseCartContext();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const { mutate: updateProduct, isLoading: isLoadingUpdate } =
    useUpdateProductMutation();

  // Handle add product to cart
  const handleAddProduct = useCallback(() => {
    handleAddToCart(product);
    toast({
      title: "Successfully add to cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [handleAddToCart, product, toast]);

  // Show error message when update fail
  const handleError = useCallback((error: string) => {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }, []);

  // Show message when update success and close modal
  const handleUpdateSuccess = useCallback(() => {
    onClose();
    toast({
      title: "Product updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, []);

  // handle Update Product
  const handleUpdate = useCallback((data: Product) => {
    if (product.id) {
      updateProduct(data, {
        onSuccess: handleUpdateSuccess,
        onError: (error) => handleError((error as AxiosError).message),
      });
    }
  }, []);

  return (
    <Flex flexDir={{ xs: "column", lg: "row" }}>
      <Box>
        <Image
          src={imageURL}
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
          <Heading color="text.default" size={{ xs: "medium", lg: "default" }}>
            {name}
          </Heading>
          <IconHeart />
        </Flex>

        <Text
          size={{ xs: "default", md: "large" }}
          variant="primary"
          py={{ xs: "16px", lg: "20px" }}
        >
          P{price}
        </Text>
        <Text color="#666" size={{ xs: "tiny", lg: "medium" }}>
          {description}
        </Text>
        <Quantity />
        <Flex my="10px">
          <Button
            variant="add"
            size={{ xs: "small", lg: "default" }}
            p={{ xs: "10px 30px", sm: "20px 40px", lg: "25px 60px" }}
            mr="10px"
            border="none"
            isLoading={isLoading}
            onClick={handleAddProduct}
          >
            Add to Cart
          </Button>
          <Button color="text.default" p="0 20px" onClick={onOpen}>
            Edit product
          </Button>
          <Suspense fallback={<LoadingIndicator />}>
            {isOpen && (
              <ModalForm
                modalTitle="Update product"
                buttonLabel="confirm"
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
  );
};

export default ProductDetailItem;
