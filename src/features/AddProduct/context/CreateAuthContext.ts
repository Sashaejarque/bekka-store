import { createContext } from 'react';

interface ProductState {
  loading: boolean;
}

export interface ProductContext {
  state: ProductState;
  actions: {
    createProduct: (
      name: string,
      price: number,
      stock: number,
      image: File
    ) => void;
  };
}

export const ProductContext = createContext<ProductContext | undefined>(
  undefined
);
