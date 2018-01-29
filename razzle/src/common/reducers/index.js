import { combineReducers } from 'redux';
import viewsReducer from './views';
import entitiesReducer from './entities';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  views: viewsReducer
});

export default rootReducer;
