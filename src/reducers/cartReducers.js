import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const addToItem = action.payload;

      const existItem = state.cartItems.find(
        product => product.id === addToItem.id
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(eachProduct =>
            eachProduct.id === existItem.id ? addToItem : eachProduct
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, addToItem],
        };
      }
    case CART_REMOVE_ITEM:
      // this action.payload = productid
      return {
        ...state,
        cartItems: state.cartItems.filter(
          eachProduct => eachProduct.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
