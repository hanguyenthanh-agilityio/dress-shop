import { memo } from "react";
import { Tbody, Tr } from "@chakra-ui/react";

// Types
import { Product } from "../../../types/common";
import CartRow from "../CartRow";

interface CartBodyProps {
  products: Product[];
  total: number;

}

const CartBody = ({ products, total }: CartBodyProps) => {
  return (
    <Tbody>
      {products.map((product) => (
          <Tr key={product.id}>
            <CartRow product={product} total={total}/>
          </Tr>
        ))};
    </Tbody>
  )
};

export default memo(CartBody);
