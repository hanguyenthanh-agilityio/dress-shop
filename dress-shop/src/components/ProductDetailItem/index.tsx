import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
  // useToast,
} from "@chakra-ui/react";

// Components
import { Quantity } from "@/components";

// Stores
import { UseCartContext } from "@/stores/Context";

// Constants
import { FALLBACK_SRC } from "@/constants/common";

// Types
import { Product } from "@/types";

interface ProductDetailItemPros {
  product: Product;
  isLoading: boolean;
}

const ProductDetailItem = ({ product, isLoading }: ProductDetailItemPros) => {
  const { handleAddToCart } = UseCartContext();

  const toast = useToast();

  const handleAddProduct = () => {
    handleAddToCart(product);
    toast({
      title: "Successfully add to cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
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
        p={{ xs: "16px 0", lg: "20px 20px 20px 0" }}
        w={{ xs: "100%", lg: "580px" }}
      >
        <Heading size={{ xs: "medium", lg: "default" }}>{product.name}</Heading>
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
        <Flex my="10px">
          <Quantity />
          <Button
            variant="add"
            size={{ xs: "small", lg: "default" }}
            p={{ xs: "10px 30px", sm: "20px 40px", lg: "25px 60px" }}
            ml={{ xs: "15px", lg: "40px" }}
            isLoading={isLoading}
            onClick={handleAddProduct}
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDetailItem;
