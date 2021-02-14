import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id,qty) => async (dispatch, getState) => {
  console.log('id', id);

  const { data: products } = await axios.get(
    `http://localhost:3000/data/products.json`
  );

  const foundProduct = products.find(item => item.id === Number(id));

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: foundProduct.id,
      name: foundProduct.name,
      image: foundProduct.image,
      price: foundProduct.price,
      countInStock: foundProduct.countInStock,
      qty
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = id => (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  