import Products from "../../../models/Product";
import { ShoppingCartItem } from "../reducer/shoppingCartReducer";

export const recalculateTotal = (
  items: ShoppingCartItem[],
  isDiscountApplied: number
) => {
  let totalCart = items.reduce((acc, item) => {
    if (item.quantity != 0) {
      return acc + item.product.price * item.quantity;
    } else {
      return acc + item.product.price;
    }
  }, 0);
  if (isDiscountApplied === 10) {
    totalCart = totalCart - totalCart * 0.1;
  }
  if (isDiscountApplied === 20) {
    totalCart = totalCart - totalCart * 0.2;
  }
  if (isDiscountApplied === 30) {
    totalCart = totalCart - totalCart * 0.3;
  }

  return totalCart;
};
