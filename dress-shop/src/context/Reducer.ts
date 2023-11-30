import { Product } from "@/types/common";

export type CartStateType = {
  cart: Product[];
};

export const initialState: CartStateType = {
  cart: [],
};

export type CartItemPayload = {
  type: string;
  payload?: Product;
};

export const REDUCER_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE: "REMOVE",
};

export const cartReducer = (state: CartStateType, action: CartItemPayload) => {
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
