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
  payload: Product;
};

export enum REDUCER_ACTION_TYPE {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE = "REMOVE_CART_ITEM",
  // UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY",
  GET_CART_LIST = "GET_CART_LIST",
}

export const cartReducer = (
  state: UseCartContextType,
  action: CartItemPayload,
) => {
  console.log("state===> action.type", state, action.type);
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TO_CART: {
      let updatedCartItems = {};

      // if (!state.cart.find((item) => item.id === action.payload.id)) {
      //   state.cart.push({ ...action.payload, quantity: 1 });
      // }

      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        updatedCartItems = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        updatedCartItems = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      console.log("updatedCartItems = REDUCER =", updatedCartItems);

      localStorage.setItem("localCart", JSON.stringify(updatedCartItems));
      return {
        ...state,
        cart: updatedCartItems,
      };
    }

    case REDUCER_ACTION_TYPE.GET_CART_LIST: {
      const productsCart = JSON.parse(
        localStorage.getItem("localCart") || "{cart: []}",
      );

      return { ...state, cart: productsCart };
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
