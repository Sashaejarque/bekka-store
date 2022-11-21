import React, { createContext, FC, PropsWithChildren, Reducer, useContext, useReducer, useState } from 'react';
import Products from '../../../models/Product';
import { fetchAllProducts } from '../../../services/products';
import { AddProductsToState, CreateProductsState, initialState, productsListReducer } from './ProductsListReducer';


  export type CreateProductReducer = Reducer<
  CreateProductsState,
  AddProductsToState
>;
interface createProductContext {
    state: CreateProductsState;
    actions: {
        addProductsToState: () => void;
    }
}
const ProductsListContext = createContext<createProductContext>({
    state: initialState,
    actions: {
        addProductsToState: () => Promise<Products[]>
    }
});

export const ProductListProvider: FC<PropsWithChildren> = ({children}) => {
    const [products, dispatch] = useReducer<CreateProductReducer>(productsListReducer, initialState);

    
    const getAllProducts = async () => {
        console.log('getAllProducts')
        try {
            const categories = await fetchAllProducts();
            dispatch({type: "ADD_PRODUCTS_TO_STATE", payload: categories.data});
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <ProductsListContext.Provider value={{state: products, actions: {addProductsToState: getAllProducts}}}>
            {children}
        </ProductsListContext.Provider>
    )
};

export const useProductListContext = () => useContext(ProductsListContext);