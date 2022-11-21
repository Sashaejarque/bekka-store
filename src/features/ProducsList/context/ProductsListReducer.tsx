import Products from "../../../models/Product";
import { CreateProductReducer } from "./ProductsListContext";

export interface CreateProductsState {
    products: Products[];
}

export interface AddProductsToState {
    type: "ADD_PRODUCTS_TO_STATE";
    payload: Products[];
}

export const initialState: CreateProductsState = {
    products: [],
};

export const productsListReducer: CreateProductReducer = (state: CreateProductsState, action: AddProductsToState) => {
    switch (action.type) {
        case "ADD_PRODUCTS_TO_STATE":
            return {
                ...state,
                products: action.payload
            }
            
        default:
            return state;
    }
};