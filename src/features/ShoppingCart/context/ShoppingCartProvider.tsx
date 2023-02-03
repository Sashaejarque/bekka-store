import {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import Products from "../../../models/Product";
import shoppingCartReducer, {
  ShoppingCartItem,
} from "../reducer/shoppingCartReducer";
import { StorageShoppingCart } from "../utils/StorageShoppingCart";
import { ShoppingCartContext } from "./CreateShoppingCardContext";

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    loading: false,
    items: [],
  });
  const storage = useMemo(() => new StorageShoppingCart("shopping-cart"), []);

  const getItemsFromLocalStorage = useCallback(() => {
    let items: ShoppingCartItem[] = [];
    items = storage.getData();
    dispatch({ type: "GET_ITEMS_FROM_LOCAL_STORAGE", payload: items });
  }, [storage]);

  const addProductToCart = useCallback(
    (product: Products) => {
      const cartItem = state.items.find(
        (item) => item.product.id === product.id
      );
      if (!cartItem) {
        dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
        const items = [...state.items, { product, quantity: 1 }];
        storage.setData(items);
      }
    },
    [state.items, storage]
  );

  const increaseOneProductToCart = useCallback(
    (product: Products) => {
      dispatch({ type: "INCREASE_ONE_PRODUCT_TO_CART", payload: product });
      const items = state.items.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      storage.setData(items);
    },
    [state.items, storage]
  );

  const decrementOneProductToCart = useCallback(
    (product: Products) => {
      dispatch({ type: "DECREMENT_ONE_PRODUCT_TO_CART", payload: product });
      const items = state.items.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      storage.setData(items);
    },
    [state.items, storage]
  );

  const removeItem = useCallback(
    (product: Products) => {
      dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: product });
      const items = state.items.filter(
        (item) => item.product.id !== product.id
      );
      storage.setData(items);
    },
    [state.items, storage]
  );

  const getItemQuantity = useCallback(
    (product: Products) => {
      return (
        state.items.find((item) => item.product.id === product.id)?.quantity ||
        0
      );
    },
    [state.items]
  );

  const resetItemQuantity = useCallback(
    (product: Products) => {
      dispatch({ type: "RESET_QUANTITY", payload: product });
      const items = state.items.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: 1 };
        }
        return item;
      });
      storage.setData(items);
    },
    [state.items, storage]
  );

  const values = useMemo(() => {
    return {
      state,
      actions: {
        addProductToCart,
        increaseOneProductToCart,
        decrementOneProductToCart,
        removeItem,
        getItemQuantity,
        resetItemQuantity,
        getItemsFromLocalStorage,
      },
    }
  }, [addProductToCart, decrementOneProductToCart, getItemQuantity, increaseOneProductToCart, removeItem, resetItemQuantity, state, getItemsFromLocalStorage]);

  return (
    <ShoppingCartContext.Provider
      value={values}
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
