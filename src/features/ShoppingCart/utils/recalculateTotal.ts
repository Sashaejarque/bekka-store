import Products from '../../../models/Product';
import { ShoppingCartItem } from '../reducer/shoppingCartReducer';

export const calculateTotal = (items: ShoppingCartItem[]) => {
  const totalCart = items.reduce((acc, item) => {
    if (item.quantity != 0) {
      return acc + item.product.price * item.quantity;
    }
    return acc + item.product.price;
  }, 0);

  return totalCart;
};
