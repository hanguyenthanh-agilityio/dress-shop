import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

// Components
import Cart from "../../components/Cart";

// Constants
import { HEADER_LIST } from "../../constants/cart";

// Mocks
import { PRODUCT_CART } from "../../Mock/common";

const ProductCart = () => {
  const subTotal = 400;

  return (
    <Container minH="90vh">
      <Heading
        textTransform="uppercase"
        pt="35px"
        fontWeight="700"
        size={{xs: "medium", lg: "default"}}
      >
        Your Cart
      </Heading>
      <Cart headerList={HEADER_LIST} products={PRODUCT_CART} total={0} />
      <Flex flexDir="column" alignItems="end">
        <Flex  my="30px">
          <Text size={{xs: "small", lg: "large"}} pr="50px">Sub Total</Text>
          <Text
            size={{xs: "large", lg: "wide"}}
            color="text.primary"
            fontWeight="600"
          >
            P{subTotal}
          </Text>
        </Flex>
        <Flex>
          <Button
            variant="check"
            p={{xs:"20px", lg:"25px"}}
            size={{xs:"small",
            lg:"default"}}
          >
            Check out
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}


export default ProductCart;
