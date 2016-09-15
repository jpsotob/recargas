import { combineReducers } from 'redux';
import createReducer from './createReducer';
import * as actions from '../actions/inicio';

const createTextField = (defaultText, updateAction, validation=() => true) =>
  createReducer(defaultText, {
    [updateAction]: (state, action) => validation(action.payload) ? action.payload : state,
    [actions.RESET]: (state, action) => defaultText
  });

const company = (state=0, action) =>
  action.type === actions.SELECT_COMPANY ? action.payload : state;

const checkNumber = (amount) => !isNaN(Number(amount))

const loading = (state=false, action) => {
  switch (action.type) {
    case actions.SUBMIT_REQUEST:
      return true;
    case actions.SUBMIT_SUCCESS:
    case actions.SUBMIT_FAILURE:
    default:
      return false;
  }
};

export const submitted = (state=false, action) => {
  switch (action.type) {
    case actions.SUBMIT_SUCCESS:
      return true;
    case actions.RESET:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  company,
  amount: createTextField('50', actions.UPDATE_AMOUNT, checkNumber),
  number: createTextField('', actions.UPDATE_NUMBER, checkNumber),
  validation: createTextField('', actions.UPDATE_VALIDATION, checkNumber),
  loading,
  submitted
});
