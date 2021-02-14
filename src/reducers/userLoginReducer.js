import {
  REQUEST_USER_DETAILS,
  SUCCESS_USER_DETAILS,
  FAIL_USER_DETAILS,
  LOGOUT_USER,
} from '../constants/userConstants';

export const loginReducer = (state = {success:false,isLogOut:false}, action) => {
  switch (action.type) {
    case REQUEST_USER_DETAILS:
      return {
        loading: true,
      };
    case SUCCESS_USER_DETAILS:
      return { loading: false, success: true, isLogged: true };
    case FAIL_USER_DETAILS:
      return { loading: false, error: action.payload };
    case LOGOUT_USER:
      return { isLogOut: true };
    default:
      return state;
  }
};
