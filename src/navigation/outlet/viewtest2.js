import React from 'react'
import {ScrollView} from 'react-native'
import Screens from '../../components/commons/Screen'
import {Grid, Row, Col,SearchBar} from 'react-native-elements'
import Main from '../../modules/Main/mainContainer'
import ImageHome from '../../modules/Imagelist/ImageContainer'
import Imgsearch from '../../modules/Imagelist/components/Imgsearch'

export default () => (
  <Grid>
    <Col size={60}>
      <Row size={18} >
        <Screens style={{justifyContent: 'flex-start',}}>
          <ScrollView style={{flex: 1}} horizontal>
            <ImageHome />
          </ScrollView>  
        </Screens>
      </Row>
      <Row size={12} >
        <Screens style={{justifyContent: 'flex-end',}}>
          <Imgsearch />
          <SearchBar lightTheme placeholder='Type Here...' />
        </Screens>
      </Row>
      <Row size={70}>
        <Screens>
          <Main>
            <ScrollView style={{flex: 1}} >
              <ImageHome />
            </ScrollView>
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