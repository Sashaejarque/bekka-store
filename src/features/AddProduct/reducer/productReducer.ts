import ProductsActions from "../actions/ProductActions";

interface ProductState {
  loading: boolean;
}

export function productReducer(state: ProductState, action: ProductsActions) {
  switch (action.type) {
    case "LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };
  }
}
