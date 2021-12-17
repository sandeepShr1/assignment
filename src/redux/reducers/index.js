import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';
import { productReducer } from './productReducer';


const rootReducer = combineReducers({
  data: productReducer,
  cart: cartReducer
});

export default rootReducer;

