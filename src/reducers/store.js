import createReducer from './createReducer';
import * as actions from '../actions/auth.js';

const store = createReducer({code: ''}, {
  [actions.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      loading: true
    };
  },
  [actions.LOGIN_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      name: action.payload.nombre,
      token: action.payload.token
    };
  },
  [actions.LOGIN_FAILURE](state, action) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  },
  [actions.UPDATE_CODE_FIELD](state, action) {
    return {
      ...state,
      code: action.payload
    }
  },
  [actions.DISMISS_LOGIN_ERROR](state, action) {
    return {
      ...state,
      error: null
    }
  }
});

export default store;
