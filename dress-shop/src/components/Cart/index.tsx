import { Button, Flex, Image, Table, Text } from "@chakra-ui/react";

// Components
import { CartHeader, CartBody } from "@/components";

// Hooks
import { useBreakPoints } from "@/hooks";

// Types
import { HeaderList, Product } from "@/types";

// Stores
import { UseCartContext } from "@/stores";

// Constants
import { FALLBACK_SRC } from "@/constants";
import { memo, useCallback } from "react";

interface CartProp {
  headerList: HeaderList[];
}

const Cart = memo<CartProp>(({ headerList }: CartProp) => {
  const { isLargeThanTablet } = useBreakPoints();

  const {
    state: { cart },
    handleDelete,
  } = UseCartContext();

  const handleDeleteItem = useCallback(
    (item: Product) => {
      handleDelete(item);
    },
    [handleDelete],
  );

  return (
    <>
      {isLargeThanTablet ? (
        <Table>
          <CartHeader headerList={headerList} />
          {cart.map((item) => {
            const { id, price, quantity } = item;
            return (
              <CartBody
                key={id}
                product={item}
                total={price * quantity}
                quantity={quantity}
              />
            );
          })}
        </Table>
      ) : (
        cart.map((item) => {
          const { id, imageURL, name, price, quantity } = item;

          return (
            <Flex mt="20px" key={id}>
              <Image
                src={imageURL}
                boxSize={{ xs: "72px", sm: "96px", lg: "120px" }}
                objectFit="cover"
                pr="10px"
                fallbackSrc={FALLBACK_SRC}
              />
              <Flex flexDir="column" pl="10px">
                <Text
                  color="text.default"
                  fontWeight="600"
                  size={{ xs: "tiny", lg: "default" }}
                >
                  {name}
                </Text>
                <Text
                  pb="10px"
                  color="text.default"
                  size={{ xs: "small", lg: "default" }}
                >
                  P{price}
                </Text>

                <Text color="text.default" mx="20px">
                  {quantity}
                </Text>
                <Text
                  pt="10px"
                  size={{ xs: "small", lg: "large" }}
                  color="text.primary"
                >
                  P{price * quantity}
                </Text>
                <Button
                  color="text.primary"
                  variant="close"
                  justifyContent="start"
                  size={{ xs: "tiny", lg: "default" }}
                  onClick={() => handleDeleteItem(item)}
                  data-testid="delete-button"
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          );
        })
      )}
    </>
  );
});

export default Cart;
