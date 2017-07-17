import React, { Component } from 'react'
import {ScrollView} from 'react-native'

import Screen from '../../../components/commons/Screen'
import ExImages from './Images'
import SearchImages from './Imgsearch'

class ImageHome extends Component {
  render() {
    const { imagesa, followImage, unfollowImage } = this.props
    const wwwe = (Object.values(imagesa))

    return (
      
            <Screen>
              {/* <SearchImages /> */}
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
