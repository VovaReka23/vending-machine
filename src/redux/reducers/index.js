import { combineReducers } from 'redux';
import product from './product';
import coins from './coins';

const rootReducer = combineReducers({
  product, coins
});

export default rootReducer;
