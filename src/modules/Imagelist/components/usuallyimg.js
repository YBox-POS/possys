import React, { Component } from 'react'
import {ScrollView} from 'react-native'

import Screen from '../../../components/commons/Screen'
import ExImages from './Images'

class Usuallyimg extends Component {
  render() {
    const { imagesa, followImage, unfollowImage } = this.props
    const wwwe = (Object.values(imagesa))

    return (
      <ScrollView style={{flex: 1}} horizontal='true'>
            <Screen>
              <ExImages
                imagesa={wwwe}
                followImage={followImage}
                unfollowImage={unfollowImage}
              />
            </Screen>
      </ScrollView>
    )
  }
}

export default Usuallyimg
