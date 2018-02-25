import { combineReducers } from 'redux';
import articlesReducer from './articles';
import currenciesReducer from './currencies';

export default combineReducers({
  articles: articlesReducer,
  currencies: currenciesReducer
});
