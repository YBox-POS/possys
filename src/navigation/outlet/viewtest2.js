import React from 'react'

import Screens from '../../components/commons/Screen'
import {Grid, Row, Col,FormInput} from 'react-native-elements'
import Main from '../../modules/Main/mainContainer'
import ImageHome from '../../modules/Imagelist/ImageContainer'
import UsuallyImages from '../../modules/Imagelist/components/usuallyimg'

export default () => (
  <Grid>
    <Col size={60}>
      <Row size={20} >
        <Screens style={{justifyContent: 'flex-start',}}>
          <ImageHome />
        </Screens>
      </Row>
      <Row size={10} >
        <Screens style={{justifyContent: 'flex-end',}}>
     
          <UsuallyImages />
               <FormInput />
        </Screens>
      </Row>
      <Row size={70}>
        <Screens>
          <Main>
            <ImageHome />
          </Main>
        </Screens>
      </Row>
    </Col>

    <Col size={40}>
      <Screens>
                
      </Screens>
    </Col>
  </Grid>
)