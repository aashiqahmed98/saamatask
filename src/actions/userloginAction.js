import {
  REQUEST_USER_DETAILS,
  SUCCESS_USER_DETAILS,
  FAIL_USER_DETAILS,
} from '../constants/userConstants';
import axios from 'axios';

export const getUsers = (email, password) => async dispatch => {


  dispatch({ type: REQUEST_USER_DETAILS });

  const { data: userData } = await axios.get(
    `http://localhost:3000/data/users.json`
  );
  
  const thatUser = userData.find(user => user.email === email)

  if (thatUser?.password === password) {
    dispatch({ type: SUCCESS_USER_DETAILS });
  } 
  else{
    if (thatUser === undefined) {
    dispatch({ type: FAIL_USER_DETAILS, payload: 'User Not Found' });
  }else{
    dispatch({
          type: FAIL_USER_DETAILS,
          payload: 'Incorrect Password, Input Valid Password',
        });
  }
  }
  };
