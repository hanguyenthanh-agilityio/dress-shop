import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Components
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";

// Containers
import HeaderContainer from "@/containers/HeaderContainer";

// Constants
import { HEADER_LIST } from "@/constants/cart";

// Mocks
import { CartState } from "@/stores/Context";

const ProductCart = () => {
  const {
    state: { cart },
  } = CartState();

  const totalPrice = cart.reduce(
    (total, priceItem): number => total + priceItem.price,
    0,
  );

  return (
    <>
      <HeaderContainer />
      <Container minH="90vh">
        <Heading
          textTransform="uppercase"
          pt="35px"
          fontWeight="700"
          size={{ xs: "medium", lg: "default" }}
        >
          Your Cart
        </Heading>
        {cart ? (
          <>
            <Cart headerList={HEADER_LIST} products={cart} total={0} />
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
                  P{totalPrice}
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
          </>
        ) : (
          <Heading>
            No item in Cart. Add <Link to="/">Products</Link> to proceed.
          </Heading>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProductCart;
