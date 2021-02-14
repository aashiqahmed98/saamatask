import {
  REQUEST_PRODUCT_DETAILS,
  SUCCESS_PRODUCT_DETAILS,
  FAIL_PRODUCT_DETAILS,
} from '../constants/productConstants';

export const getProductReducer = (state = { loading: false,productDetails:[] }, action) => {
  switch (action.type) {
    case REQUEST_PRODUCT_DETAILS:
      return { loading: true };

    case SUCCESS_PRODUCT_DETAILS:
      return { loading: false ,productDetails:action.payload};

    case FAIL_PRODUCT_DETAILS:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
