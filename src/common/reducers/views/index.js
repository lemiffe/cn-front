import { combineReducers } from 'redux';
import currencyListReducer from './currencyList';
import articleListReducer from './articleList';
import articleDetailReducer from './articleDetail';

export default combineReducers({
  currencyList: currencyListReducer,
  articleList: articleListReducer,
  articleDetail: articleDetailReducer
});
