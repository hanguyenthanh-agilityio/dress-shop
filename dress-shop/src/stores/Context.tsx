import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  // useEffect,
  useReducer,
} from "react";
import {
  UseCartContextType,
  REDUCER_ACTION_TYPE,
  cartReducer,
  initialState,
} from "./Reducer";

// Types
import { Product } from "@/types";

const Cart = createContext<{
  state: UseCartContextType;
  handleAddToCart: (product: Product) => void;
  getCartList: () => void;
  handleDelete: (product: Product) => void;
}>({
  state: initialState,
  handleAddToCart: () => null,
  getCartList: () => null,
  handleDelete: () => null,
});

type ChildrenType = { children?: ReactElement | ReactElement[] };

const Context = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.GET_CART_LIST });
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.ADD_TO_CART,
      payload: product,
    });
  }, []);

  const getCartList = useCallback(() => {
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_CART_LIST,
    });
  }, []);

  const handleDelete = useCallback(
    (product: Product) =>
      dispatch({
        type: REDUCER_ACTION_TYPE.REMOVE,
        payload: product,
      }),
    [],
  );

  return (
    <Cart.Provider
      value={{
        state,
        handleAddToCart,
        getCartList,
        handleDelete,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const UseCartContext = () => {
  return useContext(Cart);
};
