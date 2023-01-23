import { createContext } from "react";

interface AuthState {
    loading: boolean;
}

export interface AuthContext {
    state: AuthState;
    actions: {
      createProduct: (name: string, price: string, stock: string, image?: File | null) => void;
    };
}

export const ProductContext = createContext<AuthContext | undefined>(undefined);