import React from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'
import {Button} from 'react-native-elements'


const Formbottom = () => (
  <View>
    <View style={styles.FormView}>
      <Text style={styles.Subtotalfont}>Subtotal:</Text>
      <Text style={styles.SubtotalfontRt}>{"$16.00"}</Text> 
    </View>
    <View style={styles.FormView}>
      <Text style={styles.Valfont}>VAL:</Text>
      <Text style={styles.ValfontRt}>{"$3.68"}</Text> 
    </View>
    <View style={styles.FormViewGrand}>
      <Text style={styles.Grandfont}>Grand Total</Text>
      <Text style={styles.GrandfontRt}>{"$19.68"}</Text> 
    </View>
    <View style={styles.FormButtonView}>
      <Button raised icon={{name: 'cached'}} title='Save&file' buttonStyle={styles.FormButtoncolorlf}/>
      <Button raised icon={{name: 'cached'}} title='Pay' buttonStyle={styles.FormButtoncolorrt}/>
  </View>
  </View>
)
export default Formbottom;
