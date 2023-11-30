import { Link, useParams } from "react-router-dom";

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
import LoadingIndicator from "@/components/LoadingIndicator";
import HeaderContainer from "@/Containers/HeaderContainer";
import Footer from "@/components/Footer";
import { REDUCER_ACTION_TYPE } from "@/context/Reducer";
import { CartState } from "@/context/Context";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useProductById(productId);
  const { dispatch } = CartState();

  if (isLoading) return <LoadingIndicator />;

  if (!product)
    return (
      <Flex
        flexDir="column"
        alignItems="center"
        minH="80vh"
        mb="80px"
        mt="30px"
      >
        <Text
          border="1px solid #f5c6cb"
          borderRadius="6px"
          bg="#f8d7da"
          p="12px 8px"
          mb="20px"
        >
          Unexpected error occured. Please try again later.
        </Text>
        <Link to="/">
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
            fontWeight={600}
            width="120px"
          >
            Go to Home
          </Button>
        </Link>
      </Flex>
    );

  const handleAddToCart = () => {
    dispatch({
      type: REDUCER_ACTION_TYPE.ADD_TO_CART,
      payload: product,
    });
  };

  return (
    <>
      <HeaderContainer />
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
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Heading>Related Product</Heading>
        <ProductList products={PRODUCTS} />
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
