import {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useReducer,
} from "react";
import Products from "../../../models/Product";
import shoppingCartReducer, { ShoppingCartItem } from "../reducer/shoppingCartReducer";
import { ShoppingCartContext } from "./CreateShoppingCardContext";

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    loading: false,
    items: [],
  });

  const getItemsFromLocalStorage = useCallback(() => {
      let items: ShoppingCartItem[] = [];
      const localStorage = window.localStorage.getItem('shopping-cart');
      if (localStorage) {
        items = JSON.parse(localStorage);
      }
      dispatch({ type: 'GET_ITEMS_FROM_LOCAL_STORAGE', payload: items });
  }, []);

  const addProductToCart = useCallback((product: Products) => {
    const cartItem = state.items.find((item) => item.product.id === product.id);
    if (!cartItem) {
      dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
      const items = [...state.items, { product, quantity: 1 }];
      window.localStorage.setItem('shopping-cart', JSON.stringify(items));
    }
  }, [state.items]);

  const increaseOneProductToCart = useCallback((product: Products) => {
    dispatch({ type: "INCREASE_ONE_PRODUCT_TO_CART", payload: product });
    const items = state.items.map((item) => {
      if (item.product.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    window.localStorage.setItem('shopping-cart', JSON.stringify(items));
  }, [state.items]);

  const decrementOneProductToCart = useCallback((product: Products) => {
    dispatch({ type: "DECREMENT_ONE_PRODUCT_TO_CART", payload: product });
    const items = state.items.map((item) => {
      if (item.product.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }, [state.items]);

  const removeItem = useCallback((product: Products) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: product });
    const items = state.items.filter((item) => item.product.id !== product.id);
    window.localStorage.setItem('shopping-cart', JSON.stringify(items));
  }, [state.items]);

  const getItemQuantity = useCallback((product: Products) => {
    return state.items.find((item) => item.product.id === product.id)
      ?.quantity || 0;
  }, [state.items]);

  const resetItemQuantity = useCallback((product: Products) => {
    dispatch({ type: "RESET_QUANTITY", payload: product });
    const items = state.items.map((item) => {
      if (item.product.id === product.id) {
        return { ...item, quantity: 1 };
      }
      return item;
    });
    window.localStorage.setItem('shopping-cart', JSON.stringify(items));
  }, [state.items]);

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
          getItemsFromLocalStorage
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

