import { Button, Flex, Image, Table, Text } from "@chakra-ui/react";

// Components
import CartHeader from "@/components/Cart/CartHeader";
import CartBody from "@/components/Cart/CartBody";
import Quantity from "@/components/Quantity";

// Hooks
import { useBreakPoints } from "@/hooks/useBreakPoints";

// Types
import { HeaderList } from "@/types/cart";
import { Product } from "@/types/common";

interface CartProp {
  headerList: HeaderList[];
  products: Product[];
  total: number;
}

const Cart = ({ headerList, products = [], total }: CartProp) => {
  const { isLargeThanTablet } = useBreakPoints();
  return (
    <>
      {isLargeThanTablet ? (
        <Table>
          <CartHeader headerList={headerList} />
          <CartBody products={products} total={total} />
        </Table>
      ) : (
        <>
          {products.map((products) => (
            <Flex key={products.id} mt="20px">
              <Image
                src={products.src}
                boxSize={{ xs: "72px", sm: "96px", lg: "120px" }}
                objectFit="cover"
                pr="10px"
              />
              <Flex flexDir="column" pl="10px">
                <Text fontWeight="600" size={{ xs: "tiny", lg: "default" }}>
                  {products.name}
                </Text>
                <Text pb="10px" size={{ xs: "small", lg: "default" }}>
                  P{products.price}
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
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          ))}
        </>
      )}
    </>
  );
};

export default Cart;
