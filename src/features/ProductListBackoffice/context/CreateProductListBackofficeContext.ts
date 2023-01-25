import { createContext } from "react";
import Products from "../../../models/Product";

export interface ProductListBackofficeState {
    products: Products[];
    loading: boolean;
    loadingDelete: boolean;
}

export interface CreateProductBackofficeContext {
  state: ProductListBackofficeState;
  actions: {
    getAllProducts: () => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
  };
}
export const ProductsListBackofficeContext = createContext<
CreateProductBackofficeContext | undefined
>(undefined);
