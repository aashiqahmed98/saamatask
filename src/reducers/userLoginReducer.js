import {
  REQUEST_USER_DETAILS,
  SUCCESS_USER_DETAILS,
  FAIL_USER_DETAILS,
} from '../constants/userConstants';

export const loginReducer = (state = {success:false}, action) => {
  switch (action.type) {
    case REQUEST_USER_DETAILS:
      return {
        loading: true,
      };
    case SUCCESS_USER_DETAILS:
      return { loading: false, success:true};
    case FAIL_USER_DETAILS:
      return {loading:false, error: action.payload };
    default:
      return state;
  }
};
