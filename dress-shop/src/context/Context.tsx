import {
  Dispatch,
  ReactElement,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  CartItemPayload,
  CartStateType,
  cartReducer,
  initialState,
} from "./Reducer";

const Cart = createContext<{
  state: CartStateType;
  dispatch: Dispatch<CartItemPayload>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ChildrenType = { children?: ReactElement | ReactElement[] };

const Context = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
