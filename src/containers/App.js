import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getCurrentScreen } from '../reducers';
import Login from './Login';
import Home from './Home';

const App = ({ screen }) => {
  switch (screen) {
    case 'login':
      return <Login />;
    case 'home':
      return <Home />;
    case 'result_screen':
      return <div>xD</div>
  }
}

const mapStateToProps = (state) => ({
  screen: getCurrentScreen(state)
});

export default connect(mapStateToProps)(App);
