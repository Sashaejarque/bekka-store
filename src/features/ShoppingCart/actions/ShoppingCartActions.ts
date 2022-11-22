import Products from "../../../models/Product";


interface AddProductToCart {
    type: 'ADD_PRODUCT_TO_CART';
    payload: Products;
}

interface IncreaseOneProductToCart {
    type: 'INCREASE_ONE_PRODUCT_TO_CART';
    payload: Products;
}

interface DecrementOneProductToCart {
    type: 'DECREMENT_ONE_PRODUCT_TO_CART';
    payload: Products;
}

interface RemoveProductFromCart {
    type: 'REMOVE_PRODUCT_FROM_CART';
    payload: Products;
}

interface resetQuantity {
    type: 'RESET_QUANTITY';
    payload: Products;
}

type ShoppingCartActions = 
  AddProductToCart 
| IncreaseOneProductToCart 
| DecrementOneProductToCart 
| RemoveProductFromCart
| resetQuantity;

export default ShoppingCartActions;