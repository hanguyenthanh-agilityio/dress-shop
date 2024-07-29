import { memo } from "react";
import { Tbody } from "@chakra-ui/react";

// Types
import { Product } from "@/types";

// Components
import { CartRow } from "@/components";

// Stores
import { UseCartContext } from "@/stores/context";

interface CartBodyProps {
  products: Product[];
  total: number;
}

const CartBody = memo<CartBodyProps>(({ products, total }: CartBodyProps) => {
  const { handleDelete } = UseCartContext();

  return (
    <Tbody>
      {products.map((product) => (
        <CartRow
          key={product.id}
          product={product}
          total={total}
          onDelete={() => handleDelete(product)}
        />
      ))}
    </Tbody>
  );
});

export default CartBody;
