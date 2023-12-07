import {
  Dispatch,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  CartItemPayload,
  UseCartContextType,
  REDUCER_ACTION_TYPE,
  cartReducer,
  initialState,
  initializer,
} from "./Reducer";
import { useToast } from "@chakra-ui/react";
import { Product } from "@/types/common";

const Cart = createContext<{
  state: UseCartContextType;
  dispatch: Dispatch<CartItemPayload>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ChildrenType = { children?: ReactElement | ReactElement[] };

const Context = ({ children }: ChildrenType) => {
  const toast = useToast();
  const [state, dispatch] = useReducer(cartReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(state));
  }, [state]);

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch({
        type: REDUCER_ACTION_TYPE.ADD_TO_CART,
        payload: product,
      });
      toast({
        title: "Successfully add to cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    [toast],
  );

  const handleDelete = (product: Product) =>
  dispatch({
    type: REDUCER_ACTION_TYPE.REMOVE,
    payload: product,
  });


  return <Cart.Provider
    value={{
      state,
      handleAddToCart,
      handleDelete
    }}
    >
      {children}
    </Cart.Provider>;
};

export default Context;

export const UseCartContext = () => {
  return useContext(Cart);
};
