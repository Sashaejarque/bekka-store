import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useReducer,
} from "react";
import Products from "../../../models/Product";
import { useLocalStorage } from "../hooks/useLocalStorage";
import shoppingCartReducer from "../reducer/shoppingCartReducer";
import { ShoppingCartContext } from "./CreateShoppingCardContext";

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  /* const [cart, setCart] = useLocalStorage<ShoppingCartItem[]>('shopping-cart', []); */
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    loading: false,
    items: [],
  });

  const addProductToCart = useCallback((product: Products) => {
    const cartItem = state.items.find((item) => item.product.id === product.id);
    if (!cartItem) {
      dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
    }
  }, [state.items]);

  const increaseOneProductToCart = useCallback((product: Products) => {
    dispatch({ type: "INCREASE_ONE_PRODUCT_TO_CART", payload: product });
  }, []);

  const decrementOneProductToCart = useCallback((product: Products) => {
    dispatch({ type: "DECREMENT_ONE_PRODUCT_TO_CART", payload: product });
  }, []);

  const removeItem = useCallback((product: Products) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: product });
  }, []);

  const getItemQuantity = useCallback((product: Products) => {
    return state.items.find((item) => item.product.id === product.id)
      ?.quantity || 0;
  }, [state.items]);

  const resetItemQuantity = useCallback((product: Products) => {
    dispatch({ type: "RESET_QUANTITY", payload: product });
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        state,
        actions: {
          addProductToCart,
          increaseOneProductToCart,
          decrementOneProductToCart,
          removeItem,
          getItemQuantity,
          resetItemQuantity,
        }
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

