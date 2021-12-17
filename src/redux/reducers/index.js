import { combineReducers } from 'redux';
import { productReducer } from './productReducer';


const rootReducer = combineReducers({
  data: productReducer,
});

export default rootReducer;

