import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from '../../../js/home';
import store from './auth';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}