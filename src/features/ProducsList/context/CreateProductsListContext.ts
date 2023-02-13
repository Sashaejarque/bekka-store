import { createContext } from 'react';
import { CreateProductsState } from '../reducer/productsListReducer';

interface CreateProductContext {
  state: CreateProductsState;
  actions: {
    getAllProducts: () => Promise<void>;
  };
}
export const ProductsListContext = createContext<
  CreateProductContext | undefined
>(undefined);
