import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import { loginReducer } from './reducers/userLoginReducer';
import { getProductReducer } from './reducers/productReducers';

const reducer = combineReducers({
  userLogin: loginReducer,
  products: getProductReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
