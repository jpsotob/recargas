import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RechargeForm from '../components/RechargeForm';
import * as actions from '../actions/inicio';

const Home = (props) => {
  console.log(props)
  if (props.submitted) {
    return (
      <div className="container" style={{width: "500px"}}>
      <h1>Oxxo {props.name}</h1>
      <h2>Recarga realizada!</h2>
      <p>${props.amount} de saldo cargados a {props.number}</p>
      <button onClick={()=> props.reset()} className="btn btn-primary">Regresar</button>
      </div>
    )
  } else {
    return <RechargeForm {...props} />
  }
};

const mapStateToProps = (state) => ({
  ...state.inicio,
  name: state.store.name
});

export default connect(mapStateToProps, actions)(Home);
