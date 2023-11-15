import { Table } from "@chakra-ui/react";

// Components
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";

// Types
import { HeaderList } from "../../types/cart";
import { Product } from "../../types/common";

interface CartProp {
  headerList: HeaderList[];
  products: Product[];
  total: number;
}

const Cart = ({ headerList, products = [], total }: CartProp) => (
    <Table>
      <CartHeader headerList={headerList} />
      <CartBody products={products} total={total}/>
    </Table>
);

export default Cart;
