import React, { Component } from 'react'
import {ScrollView} from 'react-native';

import Screen from '../../../components/commons/Screen'
import ExForms from './Forms'

class FormHome extends Component {
   componentWillMount() {
    const { onimageform } = this.props
    onimageform()
  } 
  render() {
    const { formsa } = this.props
    const wwwe = (Object.values(formsa))

    return (
            <Screen>
              <ExForms
                formsa={wwwe}
              />
            </Screen>
    )
  }
}

export default FormHome
