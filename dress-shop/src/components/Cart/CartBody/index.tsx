import { memo } from "react";
import { Tbody } from "@chakra-ui/react";

// Types
import { Product } from "../../../types/common";
import CartRow from "../CartRow";

interface CartBodyProps {
  products: Product[];
  total: number;

}

const CartBody = memo<CartBodyProps>(({ products, total }: CartBodyProps) => {
  return (
    <Tbody>
      {products.map((product) => (
        <CartRow key={product.id} product={product} total={total}/>
      ))}
    </Tbody>
  )
})

export default CartBody;
