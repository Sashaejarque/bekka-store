import Products from '../../../models/Product';

export interface AddProductsToState {
  type: 'ADD_PRODUCTS_TO_STATE';
  payload: Products[];
}

interface SetLoadingFalse {
  type: 'SET_LOADING_FALSE';
}

interface SetLoadingTrue {
  type: 'SET_LOADING_TRUE';
}

type ProductsListActions =
  | AddProductsToState
  | SetLoadingFalse
  | SetLoadingTrue;

export default ProductsListActions;
