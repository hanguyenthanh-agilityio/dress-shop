import { useParams } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

// Components
import ProductList from "@/components/ProductList";
import Quantity from "@/components/Quantity";

// APIs
import { useProductById } from "@/apis/app";

// Mocks
import { PRODUCTS } from "@/Mock/common";

const ProductDetail = () => {
  const { productId } = useParams();

  const { data: product } = useProductById(productId);

  return (
    <Container minH="90vh" mb="80px">
      <Flex flexDir={{ xs: "column", lg: "row" }}>
        <Box>
          <Image
            src={product.imageURL}
            w={{ xs: "100%", lg: "580px" }}
            h={{ xs: "236px", sm: "321px", md: "595px", lg: "580px" }}
            objectFit="cover"
            p={{ xs: "0", lg: "20px 20px 20px 0" }}
          />
        </Box>
        <Flex
          flexDir="column"
          p={{ xs: "16px", lg: "20px 20px 20px 0" }}
          w={{ xs: "100%", lg: "580px" }}
        >
          <Heading size={{ xs: "medium", lg: "default" }}>
            {product.name}
          </Heading>
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
            >
              Add to Cart
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Heading>Related Product</Heading>
      <ProductList products={PRODUCTS} />
    </Container>
  );
};

export default ProductDetail;
