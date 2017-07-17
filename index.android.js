'use strict'
// React
import React, { Component } from 'react';
import { AppRegistry } from 'react-native'
// Redux
import { Provider } from 'react-redux'
//*********** COMMENT THE CODE BELOW TO USE STORYBOOK *************/
// all routes
import MainRoot from './src/navigation/index'
// store redux
import store from './src/store'
// history
import { history } from './src/store'

export default class PosNavigation extends Component {
  render(){
    return(
      <Provider store={store}>
        <MainRoot />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('possystem', () => PosNavigation)
