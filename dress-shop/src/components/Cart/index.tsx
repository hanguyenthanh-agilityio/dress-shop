import { Table, TableContainer } from "@chakra-ui/react";

// Components
import CartHeader from "./CartHeader";

// Types
import { HeaderList } from "../../types/cart";

interface CartProp {
  headerList: HeaderList[];
}

const Cart = ({ headerList }: CartProp) => (
  <TableContainer minH="630px">
    <Table>
      <CartHeader headerList={headerList} />
    </Table>
  </TableContainer>
);

export default Cart;
