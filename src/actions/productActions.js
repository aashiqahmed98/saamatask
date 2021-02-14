import {
  REQUEST_PRODUCT_DETAILS,
  SUCCESS_PRODUCT_DETAILS,
  FAIL_PRODUCT_DETAILS,
} from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async dispatch => {
  dispatch({ type: REQUEST_PRODUCT_DETAILS });

  try {
    const data = await axios.get(`http://localhost:3000/data/products.json`);
    dispatch({ type: SUCCESS_PRODUCT_DETAILS, payload: data.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT_DETAILS, payload: error.message });
  }
};
