import React from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'
import { Icon } from 'react-native-elements'


const Imgsearch = ({ imagesa, followImage, unfollowImage }) => (

<View style={styles.iconstyle} >
  <Icon raised name='list'  color='#f50' size={12} onPress={()=>alert("list")}/>
  <Icon raised name='apps'  color='#f50' size={12} onPress={()=>alert("GridView")}/>
  <Icon raised name='add'  color='#f50' size={12} onPress={()=>alert("don't know")}/>
</View>


)
export default Imgsearch;
