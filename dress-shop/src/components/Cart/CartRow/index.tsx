import { Button, Flex, Image, Td, Text, Tr } from "@chakra-ui/react";

// Types
import { Product } from "@/types";

// Components
import { Quantity } from "@/components";

// Constants
import { FALLBACK_SRC } from "@/constants";

interface CartRowProps {
  product: Product;
  total: number;
  onDelete?: () => void;
}

const CartRow = ({ product, total, onDelete }: CartRowProps) => {
  const { imageURL, name, price } = product;
  return (
    <Tr>
      <Td>
        <Flex maxW="280px" alignItems="center">
          <Image
            src={imageURL}
            boxSize="120px"
            objectFit="cover"
            pr="10px"
            fallbackSrc={FALLBACK_SRC}
          />
          <Text fontWeight="600">{name}</Text>
        </Flex>
      </Td>
      <Td>{price}</Td>
      <Td>
        <Quantity />
      </Td>
      <Td>
        <Text size="large" color="text.primary">
          P{total}
        </Text>
      </Td>
      <Td>
        <Button color="text.primary" variant="close" onClick={onDelete}>
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

export default CartRow;
