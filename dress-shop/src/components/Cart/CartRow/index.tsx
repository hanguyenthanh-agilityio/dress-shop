import { memo } from "react";
import { Button, Flex, Image, Td , Text} from "@chakra-ui/react";

// Types
import { Product } from "../../../types/common";

// Components
import Quantity from "../../../components/Quantity";

interface CartRowProps {
  product: Product;
  total: number;
}

const CartRow = ({product, total}: CartRowProps) => {
  const { src, name, price } = product;
  return (
    <>
      <Td>
        <Flex>
          <Image
            src={src}
            width="120px"
            height="120px"
            objectFit="cover"
          />
          <Text>{name}</Text>
        </Flex>
      </Td>
      <Td>{price}</Td>
      <Td>
        <Quantity />
      </Td>
      <Td>
        <Text>P{total}</Text>
      </Td>
      <Td>
        <Button>Delete</Button>
      </Td>
    </>
  )
}

export default memo(CartRow);
