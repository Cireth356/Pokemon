import { Select_Id } from '../actions/SelectId';

const SelectIdReducer = (state = [], action) => {
  console.log(action);
  if (action.type === Select_Id) {
    return { ...state, id: action.payload.id };
  }
  return state;
};

export default SelectIdReducer;
