import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { fetchAllProducts } from "../../../services/products";
import {
  CreateProductReducer,
  initialState,
  productsListReducer,
} from "../reducer/ProductsListReducer";
import { ProductsListContext } from "./CreateProductsListContext";

export const ProductListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<CreateProductReducer>(
    productsListReducer,
    initialState
  );

  const getAllProducts = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING_TRUE" });
      const categories = await fetchAllProducts();
      dispatch({ type: "ADD_PRODUCTS_TO_STATE", payload: categories?.data });
      dispatch({ type: "SET_LOADING_FALSE" });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <ProductsListContext.Provider
      value={{ state, actions: { getAllProducts } }}
    >
      {children}
    </ProductsListContext.Provider>
  );
};

export const useProductListContext = () => {
  const context = useContext(ProductsListContext);
  if (context === undefined) {
    throw new Error(
      "useProductListContext must be used within a ProductListProvider"
    );
  }
  return context;
};
