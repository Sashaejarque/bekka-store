import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number;
  addToCart: (
    id: number,
    quantity: number,
    price: number,
    image: string,
    title: string
  ) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cart: CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
  price: number;
  image: string;
    title: string;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>('shopping-cart', []);

  function getItemQuantity(id: number) {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  const addToCart = (
    id: number,
    quantity: number,
    price: number,
    image: string,
    title: string
  ) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity, price, image, title }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        addToCart,
        decreaseCartQuantity,
        removeFromCart,
        cart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
