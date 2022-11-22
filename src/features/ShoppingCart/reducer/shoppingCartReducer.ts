import Products from "../../../models/Product";
import ShoppingCartActions from "../actions/ShoppingCartActions";


export interface ShoppingCartItem {
    product: Products;
    quantity: number;
}

export interface ShoppingCartState {
    loading: boolean;
    items: ShoppingCartItem[];
}

export default function shoppingCartReducer (
    state: ShoppingCartState,
    action: ShoppingCartActions
) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            const product = action.payload;
            return {
                ...state,
                items: [...state.items, {product, quantity: 1}]
            }
        case 'INCREASE_ONE_PRODUCT_TO_CART':
            const productToIncrease = action.payload;
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.product.id === productToIncrease.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item;
                })
            }
        case 'DECREMENT_ONE_PRODUCT_TO_CART':
            const productToDecrement = action.payload;
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.product.id === productToDecrement.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item;
                })
            }
        case 'REMOVE_PRODUCT_FROM_CART': 
            const productToRemove = action.payload;
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== productToRemove.id)
            }
        case 'RESET_QUANTITY':
            const productToReset = action.payload;
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.product.id === productToReset.id) {
                        return {
                            ...item,
                            quantity: 1
                        }
                    }
                    return item;
                })
            }
                
    }
}