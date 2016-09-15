import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RechargeForm from '../components/RechargeForm';
import * as actions from '../actions/inicio';

const Home = (props) => {
  console.log(props)
  if (props.submitted) {
    return (
      <div>
      <h2>Recarga realizada!</h2>
      <button onClick={()=> props.reset()} className="btn btn-primary">Regresar</button>
      </div>
    )
  } else {
    return <RechargeForm {...props} />
  }
};

const mapStateToProps = (state) => ({
  ...state.inicio
});

export default connect(mapStateToProps, actions)(Home);
