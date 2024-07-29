import { Button, Flex, Image, Table, Text } from "@chakra-ui/react";

// Components
import { CartHeader, CartBody, Quantity } from "@/components";

// Hooks
import { useBreakPoints } from "@/hooks";

// Types
import { HeaderList, Product } from "@/types";

// Stores
import { UseCartContext } from "@/stores";

// Constants
import { FALLBACK_SRC } from "@/constants";
import { memo } from "react";

interface CartProp {
  headerList: HeaderList[];
  products: Product[];
  total: number;
  onClickDelete?: () => void;
}

const Cart = memo<CartProp>(
  ({ headerList, products = [], total }: CartProp) => {
    const { isLargeThanTablet } = useBreakPoints();

    const { handleDelete } = UseCartContext();

    return (
      <>
        {isLargeThanTablet ? (
          <Table>
            <CartHeader headerList={headerList} />
            <CartBody products={products} total={total} />
          </Table>
        ) : (
          <>
            {products.map((product: Product) => {
              const { id, imageURL, name, price } = product;

              return (
                <Flex key={id} mt="20px">
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
                    <Quantity />
                    <Text
                      pt="10px"
                      size={{ xs: "small", lg: "large" }}
                      color="text.primary"
                    >
                      P{total}
                    </Text>
                    <Button
                      color="text.primary"
                      variant="close"
                      justifyContent="start"
                      size={{ xs: "tiny", lg: "default" }}
                      onClick={() => handleDelete(product)}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Flex>
              );
            })}
          </>
        )}
      </>
    );
  },
);

export default Cart;
