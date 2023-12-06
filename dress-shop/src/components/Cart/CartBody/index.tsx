import { memo } from "react";
import { Tbody } from "@chakra-ui/react";

// Types
import { Product } from "@/types/common";

// Components
import CartRow from "@/components/Cart/CartRow";

// Stores
import { CartState } from "@/stores/Context";
import { REDUCER_ACTION_TYPE } from "@/stores/Reducer";

interface CartBodyProps {
  products: Product[];
  total: number;
}

const CartBody = memo<CartBodyProps>(({ products, total }: CartBodyProps) => {
  const { dispatch } = CartState();

  const handleOnDelete = (product: Product) =>
    dispatch({
      type: REDUCER_ACTION_TYPE.REMOVE,
      payload: product,
    });

  return (
    <Tbody>
      {products.map((product) => (
        <CartRow
          key={product.id}
          product={product}
          total={total}
          // onIncrease={() => dispatch({type:REDUCER_ACTION_TYPE.INCREASE, payload: product})}
          // onDecrease={() => dispatch({type:REDUCER_ACTION_TYPE.DECREASE, payload: product})}
          onDelete={() => handleOnDelete(product)}
        />
      ))}
    </Tbody>
  );
});

export default CartBody;
