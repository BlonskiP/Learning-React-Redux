import { combineReducers } from 'redux';
import TimeReducer from './reducerTime';
const rootReducer = combineReducers({
  time: TimeReducer
});

export default rootReducer;
