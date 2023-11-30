// import {
//   Dispatch,
//   ReactElement,
//   createContext,
//   useContext,
//   useReducer,
// } from "react";
// import {
//   CartItemPayload,
//   CartStateType,
//   cartReducer,
//   initialState,
// } from "./Reducer";

import { Product } from "@/types/common";
import { createContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

// const Cart = createContext<{
//   state: CartStateType;
//   dispatch: Dispatch<CartItemPayload>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });

// type ChildrenType = { children?: ReactElement | ReactElement[] };

// const Context = ({ children }: ChildrenType) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
// };

// export default Context;

// export const CartState = () => {
//   return useContext(Cart);
// };

export type CartItemPayload = {
  type: string;
  payload?: Product;
};

export const CartContext = createContext({} as CartItemPayload);

export const REDUCER_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE: "REMOVE",
};

export const Context = (props) => {
  const CartReducer = (state, action) => {
    switch (action.type) {
      case REDUCER_ACTION_TYPE.ADD_TO_CART:
        return { ...state, cart: [...state.cart, { ...action.payload }] };
      case REDUCER_ACTION_TYPE.REMOVE:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload?.id),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={(state, dispatch)}>
      {props.children}
    </CartContext.Provider>
  );
};
