/* eslint-disable no-case-declarations */
import { Product } from "@/types";

export type UseCartContextType = {
  cart: Product[];
};

export const initialState: UseCartContextType = {
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
  console.log("currentValue", currentValue);

  return currentValue;
};

export type CartItemPayload = {
  type: REDUCER_ACTION_TYPE;
  payload: Product | { id: number; quantity: number };
};

export enum REDUCER_ACTION_TYPE {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE = "REMOVE_CART_ITEM",
  UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY",
}

export const cartReducer = (
  state: UseCartContextType,
  action: CartItemPayload,
) => {
  let updatedCartItems;

  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TO_CART: {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        updatedCartItems = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        updatedCartItems = [...state.cart, { ...product, quantity: 1 }];
      }

      return { ...state, cartItems: updatedCartItems };
    }

    case REDUCER_ACTION_TYPE.UPDATE_CART_QUANTITY: {
      const { id, quantity } = action.payload;
      updatedCartItems = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );

      return { ...state, cartItems: updatedCartItems };
    }

    case REDUCER_ACTION_TYPE.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload?.id),
      };
    default:
      return state;
  }
};
