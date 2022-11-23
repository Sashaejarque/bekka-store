import { createContext } from "react";
import Products from "../../../models/Product";
import { ShoppingCartItem } from "../reducer/shoppingCartReducer";

interface ShoppingCartState {
  items: ShoppingCartItem[];
  loading: boolean;
}
export interface ShoppingCartContext {
  state: ShoppingCartState;
  actions: {
    addProductToCart: (item: Products) => void;
    increaseOneProductToCart: (product: Products) => void;
    decrementOneProductToCart: (product: Products) => void;
    removeItem: (item: Products) => void;
    getItemQuantity: (item: Products) => number;
    resetItemQuantity: (item: Products) => void;
    getItemsFromLocalStorage: () => void;
  };
}
export const ShoppingCartContext = createContext<
  ShoppingCartContext | undefined
>(undefined);
