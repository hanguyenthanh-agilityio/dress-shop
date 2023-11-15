import { Table } from "@chakra-ui/react";

// Components
import CartHeader from "./CartHeader";

// Types
import { HeaderList } from "../../types/cart";

interface CartProp {
  headerList: HeaderList[];
}

const Cart = ({ headerList }: CartProp) => (
    <Table>
      <CartHeader headerList={headerList} />
    </Table>
);

export default Cart;
