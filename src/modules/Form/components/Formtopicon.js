import React from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'
import { Icon } from 'react-native-elements'


const Formtopicons = () => (

<View style={styles.iconstyle} >
  <Icon reverse raised name='list'  color='#5DA5F5' size={20} onPress={()=>alert("list")}/>
  <Icon reverse raised name='apps'  color='#5DA5F5' size={20} onPress={()=>alert("GridView")}/>
  <Icon reverse raised name='add'  color='#5DA5F5' size={20} onPress={()=>alert("don't know")}/>
  <Icon reverse raised name='list'  color='#5DA5F5' size={20} onPress={()=>alert("list")}/>
  <Icon reverse raised name='apps'  color='#5DA5F5' size={20} onPress={()=>alert("GridView")}/>
  <Icon reverse raised name='add'  color='#5DA5F5' size={20} onPress={()=>alert("don't know")}/>
  <Icon reverse raised name='add'  color='#5DA5F5' size={20} onPress={()=>alert("don't know")}/>
</View>


)
export default Formtopicons;
