import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { lazy } from "react";

// Components
const Cart = lazy(() => import("@/components/Cart"));

// Constants
import { HEADER_LIST } from "@/constants";

// Mocks
import { UseCartContext } from "@/stores";

// Hooks
import { useBreakPoints } from "@/hooks";

const ProductCart = () => {
  const { isLargeThanTablet } = useBreakPoints();

  const {
    state: { cart },
  } = UseCartContext();

  const totalPrice = cart.reduce(
    (total, priceItem): number => total + priceItem.price,
    0,
  );

  return (
    <>
      <Container minH="90vh" px="20px" mb={{ lg: "-48px" }}>
        <Heading
          textTransform="uppercase"
          pt={{ xs: "10px", lg: "35px" }}
          fontWeight="700"
          color="text.default"
          size={{ xs: "medium", lg: "default" }}
          mt={{ lg: "80px" }}
        >
          Your Cart
        </Heading>
        {totalPrice ? (
          <>
            <Cart headerList={HEADER_LIST} products={cart} total={0} />
            <Flex
              flexDir="column"
              alignItems="end"
              mb={isLargeThanTablet ? "0" : "70px"}
            >
              <Flex my="30px" alignItems="center">
                <Text
                  size={{ xs: "small", lg: "large" }}
                  pr={{ xs: "30px", lg: "50px" }}
                  color="text.default"
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
              <Button
                variant="check"
                p={{ xs: "20px", lg: "25px" }}
                size={{ xs: "small", lg: "default" }}
                mb="20pt"
              >
                Check out
              </Button>
            </Flex>
          </>
        ) : (
          <Heading color="text.default">
            No item in Cart. Add <Link to="/">Products</Link> to proceed.
          </Heading>
        )}
      </Container>
    </>
  );
};

export default ProductCart;
