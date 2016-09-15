import * as api from './api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (code) => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });
  dispatch(dismissLoginError())

  return api.loginUser(code)
    .then(payload => {
      if (payload.success === true) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          error: payload.message || "Couldn't log in"
        });
      }
    },
    error => {
      dispatch({
        type: LOGIN_FAILURE,
        error: error.message || "Couldn't log in"
      });
    });
};


export const UPDATE_CODE_FIELD = 'UPDATE_CODE_FIELD';

export const updateTokenField = (payload) => ({
  type: UPDATE_CODE_FIELD,
  payload
});


export const DISMISS_LOGIN_ERROR = 'DISMISS_LOGIN_ERROR';

export const dismissLoginError = () => ({
  type: DISMISS_LOGIN_ERROR
});
