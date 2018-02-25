import { combineReducers } from 'redux';
import articlesReducer from './articles';
import articleDetailsReducer from './articleDetails';
import currenciesReducer from './currencies';

export default combineReducers({
  articles: articlesReducer,
  articleDetails: articleDetailsReducer,
  currencies: currenciesReducer
});
