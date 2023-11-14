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
}

const Cart = ({ headerList, products }: CartProp) => (
    <Table>
      <CartHeader headerList={headerList} />
      <CartBody products={products} total={400}/>
    </Table>
);

export default Cart;
