import { Th, Thead, Tr } from "@chakra-ui/react";

// types
import { HeaderList } from "@/types";

interface CartHeaderProps {
  headerList: HeaderList[];
}

const CartHeader = ({ headerList }: CartHeaderProps) => (
  <Thead>
    <Tr>
      {headerList.map(({ title }, index) => (
        <Th key={`title-${index}`} color="text.default">
          {title}
        </Th>
      ))}
    </Tr>
  </Thead>
);

export default CartHeader;
