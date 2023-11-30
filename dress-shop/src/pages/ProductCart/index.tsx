import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

// Components
import Cart from "@/components/Cart";

// Constants
import { HEADER_LIST } from "@/constants/cart";

// Mocks
import { CartState } from "@/context/Context";
import { REDUCER_ACTION_TYPE } from "@/context/Reducer";

const ProductCart = () => {
  const subTotal = 400;

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const handleOnClickDelete = () =>
    dispatch({
      type: REDUCER_ACTION_TYPE.REMOVE,
    });

  return (
    <Container minH="90vh">
      <Heading
        textTransform="uppercase"
        pt="35px"
        fontWeight="700"
        size={{ xs: "medium", lg: "default" }}
      >
        Your Cart
      </Heading>
      <Cart
        headerList={HEADER_LIST}
        products={cart}
        total={0}
        onClickDelete={handleOnClickDelete}
      />
      <Flex flexDir="column" alignItems="end">
        <Flex my="30px" alignItems="center">
          <Text
            size={{ xs: "small", lg: "large" }}
            pr={{ xs: "30px", lg: "50px" }}
          >
            Sub Total
          </Text>
          <Text
            size={{ xs: "large", lg: "wide" }}
            color="text.primary"
            fontWeight="600"
          >
            P{subTotal}
          </Text>
        </Flex>
        <Flex>
          <Button
            variant="check"
            p={{ xs: "20px", lg: "25px" }}
            size={{ xs: "small", lg: "default" }}
          >
            Check out
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProductCart;
