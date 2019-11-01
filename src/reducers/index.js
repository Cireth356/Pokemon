import { combineReducers } from 'redux';
import SelectIdReducer from './SelectIdReducer';

export default combineReducers({
  id: SelectIdReducer
});
