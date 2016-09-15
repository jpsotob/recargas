import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import Root from './containers/Root'

const store = configureStore()

if (typeof window !== 'undefined') {
    window.React = React;
}

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
