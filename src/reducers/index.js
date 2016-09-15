import { combineReducers } from 'redux';
import store from './store';
import screen from './screen';
import inicio from './inicio';

const rootReducer = combineReducers({
  store,
  inicio,
  screen
});

export const getCurrentScreen = (state) => state.screen;

export default rootReducer;
