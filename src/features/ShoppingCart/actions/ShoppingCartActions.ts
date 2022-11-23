import Products from "../../../models/Product";
import { ShoppingCartItem } from "../reducer/shoppingCartReducer";

interface AddProductToCart {
  type: "ADD_PRODUCT_TO_CART";
  payload: Products;
}

interface IncreaseOneProductToCart {
  type: "INCREASE_ONE_PRODUCT_TO_CART";
  payload: Products;
}

interface DecrementOneProductToCart {
  type: "DECREMENT_ONE_PRODUCT_TO_CART";
  payload: Products;
}

interface RemoveProductFromCart {
  type: "REMOVE_PRODUCT_FROM_CART";
  payload: Products;
}

interface resetQuantity {
  type: "RESET_QUANTITY";
  payload: Products;
}

interface getItemsFromLocalStorage {
  type: "GET_ITEMS_FROM_LOCAL_STORAGE";
  payload: ShoppingCartItem[];
}

type ShoppingCartActions =
  | AddProductToCart
  | IncreaseOneProductToCart
  | DecrementOneProductToCart
  | RemoveProductFromCart
  | resetQuantity
  | getItemsFromLocalStorage;

export default ShoppingCartActions;
