import { Reducer } from "react";
import Products from "../../../models/Product";
import ProductsListActions from "../actions/ProductListActions";

export interface CreateProductsState {
  products: Products[];
  loading: boolean;
}
export type CreateProductReducer = Reducer<
  CreateProductsState,
  ProductsListActions
>;

export const initialState: CreateProductsState = {
  products: [],
  loading: false,
};

export const productsListReducer: CreateProductReducer = (
  state: CreateProductsState,
  action: ProductsListActions
) => {
  switch (action.type) {
    case "ADD_PRODUCTS_TO_STATE":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
