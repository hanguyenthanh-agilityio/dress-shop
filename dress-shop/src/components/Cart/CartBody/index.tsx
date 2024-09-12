import { memo } from "react";
import { Tbody } from "@chakra-ui/react";

// Types
import { Product } from "@/types";

// Components
import { CartRow } from "@/components";

// Stores
import { UseCartContext } from "@/stores";

interface CartBodyProps {
  product: Product;
  total: number;
  quantity: number;
}

const CartBody = memo<CartBodyProps>(
  ({ product, total, quantity }: CartBodyProps) => {
    const { handleDelete } = UseCartContext();
    const handleDeleteCart = () => handleDelete(product);

    return (
      <Tbody>
        <CartRow
          product={product}
          total={total}
          onDelete={handleDeleteCart}
          quantity={quantity}
        />
      </Tbody>
    );
  },
);

export default CartBody;
