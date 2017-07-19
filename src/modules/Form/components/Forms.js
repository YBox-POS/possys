import React from 'react';
import { Text, Image, View,ScrollView } from 'react-native';
import GridView from 'react-native-super-grid';
import { List, ListItem, Button,Grid, Row, Col} from 'react-native-elements';
import styles from './styles';
import Screens from '../../../components/commons/Screen'

import Formtopicons from './Formtopicon'
import Formbottoms from './Formbottom'

const ExForms = ({ formsa }) => (
  <Screens>

    <Row size={20} >
      <Screens>
        <Formtopicons />
      </Screens>
    </Row>

    <Row size={60} >
      <Screens>
        <ScrollView style={{flex:1}}>
          {Object.values(formsa).map(({ id, count, price,name,desc }) => (
            <ListItem
              hideChevron
              title={name}
              key={`user-${id}`}
              onPress={() => {console.log('你点击的是列表'+id)}}
              rightTitle={price.toString()}
              
            />
          ))}
        </ScrollView> 
      </Screens>
    </Row>

    <Row size={20} >
      <Screens>
        <Formbottoms />
      </Screens>
    </Row>  

  </Screens>
)



export default ExForms;
