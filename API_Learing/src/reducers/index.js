import { combineReducers } from 'redux';
import TimeReducer from './reducerTime';
import TimeSave from './reducerRecord';
const rootReducer = combineReducers({
  time: TimeReducer,
  record:TimeSave
});

export default rootReducer;
