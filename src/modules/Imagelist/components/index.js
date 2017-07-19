import React, { Component } from 'react'
import {ScrollView} from 'react-native'

import Screen from '../../../components/commons/Screen'
import ExImages from './Images'
import ExListImages from './ListImages'

class ImageHome extends Component {
  
  componentWillMount() {
    const { ongetimages } = this.props
    ongetimages()
  }
  render() {
    const { imagesa, followImage, unfollowImage } = this.props
    const wwwe = (Object.values(imagesa))

    return (
            <Screen>
              <ExImages
                imagesa={wwwe}
                followImage={followImage}
                unfollowImage={unfollowImage}
              />
            </Screen>
    )
  }
}

export default ImageHome
