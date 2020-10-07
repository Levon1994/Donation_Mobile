import CreateActionCreator  from '../helpers/createActionCreator';
import {
  USER,
} from './types';

const toggleDarkMode = (user) => ({
  type: USER,
  payload: user
});

export {
  toggleDarkMode
};
