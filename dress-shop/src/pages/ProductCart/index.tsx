import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Components
import { Cart } from "@/components";

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
      <Container minH="90vh">
        <Heading
          textTransform="uppercase"
          pt="35px"
          fontWeight="700"
          size={{ xs: "medium", lg: "default" }}
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
          <Heading>
            No item in Cart. Add <Link to="/">Products</Link> to proceed.
          </Heading>
        )}
      </Container>
    </>
  );
};

export default ProductCart;
