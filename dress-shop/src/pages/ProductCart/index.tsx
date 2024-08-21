import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";

// Components
const Cart = lazy(() => import("@/components/Cart"));

// Constants
import { HEADER_LIST } from "@/constants";

// Mocks
import { UseCartContext } from "@/stores";

// Hooks
import { useBreakPoints } from "@/hooks";
import { LoadingIndicator } from "@/components";

const ProductCart = () => {
  const { isLargeThanTablet } = useBreakPoints();

  const {
    state: { cart },
    updateCartQuantity,
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
            <Suspense fallback={<LoadingIndicator />}>
              {cart.map((item) => (
                <Cart
                  key={item.id}
                  headerList={HEADER_LIST}
                  products={cart}
                  total={0}
                  quantity={item.quantity}
                  onClickDec={() =>
                    updateCartQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    })
                  }
                  onClickInc={() =>
                    updateCartQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                  }
                  isDisable={false}
                />
              ))}
            </Suspense>
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
