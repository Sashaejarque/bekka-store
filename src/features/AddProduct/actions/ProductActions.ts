interface LoadingFalse {
  type: 'LOADING_FALSE';
}

interface LoadingTrue {
  type: 'LOADING_TRUE';
}

type ProductsActions = LoadingFalse | LoadingTrue;

export default ProductsActions;
