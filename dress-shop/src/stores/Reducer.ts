import { Product } from "@/types/common";

export type CartStateType = {
  cart: Product[];
};

export const initialState: CartStateType = {
  cart: [],
};

export const initializer = (initialValue = initialState) => {
  let currentValue;
  try {
    currentValue =
      JSON.parse(localStorage.getItem("localCart") || "{cart: []}") ||
      initialValue;
  } catch (error) {
    currentValue = initialValue;
  }

  return currentValue;
};

export type CartItemPayload = {
  type: REDUCER_ACTION_TYPE;
  payload: Product;
};

export enum REDUCER_ACTION_TYPE {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE = "REMOVE_CART_ITEM",
}

export const cartReducer = (state: CartStateType, action: CartItemPayload) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REDUCER_ACTION_TYPE.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload?.id),
      };
    default:
      return state;
  }
};
