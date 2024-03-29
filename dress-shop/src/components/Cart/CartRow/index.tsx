import { Button, Flex, Image, Td, Text, Tr } from "@chakra-ui/react";

// Types
import { Product } from "@/types/common";

// Components
import Quantity from "@/components/Quantity";

interface CartRowProps {
  product: Product;
  total: number;
  // onIncrease: () => void;
  // onDecrease: () => void;
  onDelete?: () => void;
}

const CartRow = ({ product, total, onDelete }: CartRowProps) => {
  const { imageURL, name, price } = product;
  return (
    <Tr>
      <Td>
        <Flex maxW="280px">
          <Image src={imageURL} boxSize="120px" objectFit="cover" pr="10px" />
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
