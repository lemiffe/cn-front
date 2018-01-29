import { combineReducers } from 'redux';
import coinListReducer from './coinList';
import postListReducer from './postList';

export default combineReducers({
  coinList: coinListReducer,
  postList: postListReducer
});
