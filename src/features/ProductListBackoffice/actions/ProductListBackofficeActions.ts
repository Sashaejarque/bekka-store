import Products from "../../../models/Product";

interface getProducts {
    type: 'GET_ALL_PRODUCTS';
    payload: Products[];
}

interface LoadingFalse {
    type: 'LOADING_FALSE';
}

interface LoadingTrue {
    type: 'LOADING_TRUE';
}

interface LoadingDeleteFalse {
    type: 'LOADING_DELETE_FALSE';
}

interface LoadingDeleteTrue {
    type: 'LOADING_DELETE_TRUE';
}


type ProductListBackofficeActions = getProducts | LoadingFalse | LoadingTrue | LoadingDeleteFalse | LoadingDeleteTrue;

export default ProductListBackofficeActions;