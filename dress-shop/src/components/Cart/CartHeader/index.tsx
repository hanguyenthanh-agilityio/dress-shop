import { Th, Thead, Tr } from "@chakra-ui/react";

// Components
import { HeaderList } from "../../../types/cart";

interface CartHeaderProps {
  headerList: HeaderList[];
}

const CartHeader = ({ headerList }: CartHeaderProps) => (
  <Thead>
    <Tr display="Flex" justifyContent="space-between">
      {headerList.map(({ title }, index) => (
        <Th key={`title-${index}`}>{title}</Th>
      ))}
    </Tr>
  </Thead>
);

export default CartHeader;
