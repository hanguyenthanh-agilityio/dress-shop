/* eslint-disable no-case-declarations */
// import { Cart } from "@/types/cart";
import { Product } from "@/types/common";

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

  return currentValue;
};

export type CartItemPayload = {
  type: REDUCER_ACTION_TYPE;
  payload: Product;
};

export enum REDUCER_ACTION_TYPE {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE = "REMOVE_CART_ITEM",
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

// const sumItems = (items) => {
//   const itemCounter = items.reduce(
//     (total: number, priceItem: Cart) => total + priceItem.price,
//     0,
//   );
//   const total = items
//   .reduce((total: number, product: Cart) => total + product.price * product.qty, 0)
//   .toFixed(2);
// return { itemCounter, total };
// };

export const cartReducer = (state: UseCartContextType, action: CartItemPayload) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        // ...sumItems(state.cart),
      };

    // case REDUCER_ACTION_TYPE.INCREASE:
    //   state.cart.map(
    //     (item) => (item.id === action.payload.id ? item : {...item, qty: item.qty + 1})
    //   )
    //   return {
    //     ...state,
    //     ...sumItems(state.cart),
    //   }
    //   case REDUCER_ACTION_TYPE.DECREASE:
    //     state.cart.map(
    //       (item) => (item.id === action.payload.id ? item : {...item, qty: item.qty - 1})
    //     )
    //     return {
    //       ...state,
    //       ...sumItems(state.cart),
    //     }
    case REDUCER_ACTION_TYPE.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload?.id),
      };
    default:
      return state;
  }
};
