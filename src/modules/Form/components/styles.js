import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  iconstyle:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
  },
  FormView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom:6
  },
  FormViewGrand:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:8
  },
  Subtotalfont:{
    fontSize: 16,
  },
  Valfont:{
    color:'#6B6E6E',
    fontSize:16,
  },
  Grandfont:{
    fontSize:20,
    fontWeight: "700",
  },
  SubtotalfontRt:{
    fontSize: 18,
    fontWeight: "600",
  },
  ValfontRt:{
    color:'#6B6E6E',
    fontSize: 16,
    fontWeight: "700",
  },
  GrandfontRt:{
    fontSize: 20,
    fontWeight: "700",
  },
  FormButtonView:{
    marginLeft:-15,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  FormButtoncolorlf:{
    paddingLeft:45,
    paddingRight:45,
    backgroundColor:'#5595D1'
  },
  FormButtoncolorrt:{
    paddingLeft:63,
    paddingRight:63,
    backgroundColor:'#5595D1'
  }

})


module.exports = styles
