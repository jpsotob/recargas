import React, { Component, PropTypes } from 'react';
import * as authActions from '../actions/auth';
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm';

const Login = (props) => {
  return <LoginForm  {...props}/>
};

const mapStateToProps = (state) => ({
  ...state.store
});

export default connect(mapStateToProps, authActions)(Login);
