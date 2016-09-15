import * as api from './api'

export const SELECT_COMPANY = 'SELECT_COMPANY';

export const selectCompany = (payload) => ({
  type: SELECT_COMPANY,
  payload
});


export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';

export const updateAmount = (payload) => ({
  type: UPDATE_AMOUNT,
  payload
});


export const UPDATE_NUMBER = 'UPDATE_NUMBER';
export const UPDATE_VALIDATION = 'UPDATE_VALIDATION';

export const updateNumber = (payload) => ({
  type: UPDATE_NUMBER,
  payload
});

export const updateValidation = (payload) => ({
  type: UPDATE_VALIDATION,
  payload
});

export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";

export const submitRecharge = () => (dispatch, getState) => {

  const { inicio: { company, amount, number }, store: { token } } = getState();

  dispatch({
    type: SUBMIT_REQUEST
  });

  console.log("hi")

  api.submitRecharge(company, amount, number, token)
    .then(payload => {
      console.log("why")
      dispatch({
        type: SUBMIT_SUCCESS,
        payload
      })
    })
}

export const RESET = 'RESET';
export const reset = () => ({
  type: RESET
});
