import createReducer from '../helpers/createReducer';
import { combineReducers } from 'redux';
import {
  USER,
} from './types';

const user = (state = false, action) => {
  switch (action.type) {
    case USER:
      return action.payload;
    default:
      return state;
  };
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
