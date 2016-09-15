import createReducer from './createReducer';
import * as authActions from '../actions/auth'
import * as inicioActions from '../actions/inicio';

const screen = createReducer('login', {
  [authActions.LOGIN_SUCCESS](state, action) {
    return "home";
  }
});

export default screen;
