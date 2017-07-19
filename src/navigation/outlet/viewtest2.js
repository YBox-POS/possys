import React from 'react'
import {ScrollView,Text,View} from 'react-native'
import Screens from '../../components/commons/Screen'
import {Grid, Row, Col,SearchBar} from 'react-native-elements'
import Main from '../../modules/Main/mainContainer'
import ImageHome from '../../modules/Imagelist/ImageContainer'
import Imgsearch from '../../modules/Imagelist/components/Imgsearch'
import Formtopicons from '../../modules/Form/components/Formtopicon'
import Formbottom from '../../modules/Form/components/Formbottom'


import Home from '../../modules/Home/homeContainer'
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
          <ScrollView style={{flex: 1}} >
            <ImageHome />
          </ScrollView>
        </Screens>
      </Row>

    </Col>


    <Col size={40}>
      <Row size={20} >
        <Screens >
          <Formtopicons />
        </Screens>
      </Row>
      <Row size={60} >
        <Screens>
          <Main>
            <Home />
          </Main>
        </Screens>
      </Row>
      <Row size={20} >
        <Screens>
          <Formbottom />
        </Screens>
      </Row>  
    </Col>
  </Grid>
)