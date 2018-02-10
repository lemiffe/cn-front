import { combineReducers } from 'redux';
import postsReducer from './posts';
import currenciesReducer from './currencies';

export default combineReducers({
  posts: postsReducer,
  currencies: currenciesReducer
});
