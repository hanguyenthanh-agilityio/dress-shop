/* eslint-disable no-case-declarations */
import { Product } from "@/types";

export type UseCartContextType = {
  cart: Product[];
};

export const initialState: UseCartContextType = {
  cart: [],
};

export type CartItemPayload = {
  type: REDUCER_ACTION_TYPE;
  payload?: Product;
};

export enum REDUCER_ACTION_TYPE {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE = "REMOVE_CART_ITEM",
  GET_CART_LIST = "GET_CART_LIST",
}

export const cartReducer = (
  state: UseCartContextType,
  action: CartItemPayload,
) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TO_CART: {
      let updatedCartItems = [];

      const productId = action.payload?.id;

      const existingItem = state.cart.find((item) => item.id === productId);

      if (existingItem) {
        updatedCartItems = state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        updatedCartItems = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      localStorage.setItem("localCart", JSON.stringify(updatedCartItems));

      return {
        ...state,
        cart: updatedCartItems,
      };
    }

    case REDUCER_ACTION_TYPE.GET_CART_LIST: {
      const storeCart = localStorage.getItem("localCart");
      const productsCart = storeCart ? JSON.parse(storeCart) : [];

      return { ...state, cart: productsCart };
    }

    case REDUCER_ACTION_TYPE.REMOVE:
      const productId = action.payload?.id;
      const updatedCartItems = state.cart.filter(
        (item) => item.id !== productId,
      );

      localStorage.setItem("localCart", JSON.stringify(updatedCartItems));

      return {
        ...state,
        cart: updatedCartItems,
      };
    default:
      return state;
  }
};
