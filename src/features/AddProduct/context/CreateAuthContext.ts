import { createContext } from "react";

interface ProductState {
    loading: boolean;
}

export interface ProductContext {
    state: ProductState;
    actions: {
      createProduct: (name: string, price: string, stock: string, image?: File | null) => void;
    };
}

export const ProductContext = createContext<ProductContext | undefined>(undefined);