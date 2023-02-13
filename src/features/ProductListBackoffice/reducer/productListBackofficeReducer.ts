import Products from '../../../models/Product';
import ProductListBackofficeActions from '../actions/ProductListBackofficeActions';

interface ProductListBackofficeState {
  products: Products[];
  loading: boolean;
  loadingDelete: boolean;
}

export function productListBackofficeReducer(
  state: ProductListBackofficeState,
  action: ProductListBackofficeActions
) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'LOADING_TRUE':
      return {
        ...state,
        loading: true,
      };
    case 'LOADING_FALSE':
      return {
        ...state,
        loading: false,
      };
    case 'LOADING_DELETE_TRUE':
      return {
        ...state,
        loadingDelete: true,
      };
    case 'LOADING_DELETE_FALSE':
      return {
        ...state,
        loadingDelete: false,
      };
  }
}
