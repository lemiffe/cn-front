import { combineReducers } from 'redux';
import currencyListReducer from './currencyList';
import articleListReducer from './articleList';

export default combineReducers({
  currencyList: currencyListReducer,
  articleList: articleListReducer
});
