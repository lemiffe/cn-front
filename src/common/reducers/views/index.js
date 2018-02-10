import { combineReducers } from 'redux';
import currencyListReducer from './currencyList';
import postListReducer from './postList';

export default combineReducers({
  currencyList: currencyListReducer,
  postList: postListReducer
});
