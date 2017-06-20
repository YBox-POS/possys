import React from 'react';
import {Image} from 'react-native';


const btnsTypes = [
  { text: '+',    type: 'primary',  onPress:()=>{console.log("aa")}},
  { text: '-',  type: 'secondary', },
  { text: 'Delete',     type: 'delete',    }
];

const rows = [
  {
    avatarimg:"1",
    text: 'avaimage',
    price:'$2.50',
    right: btnsTypes
  }, {
    avatarimg:"26",
    text: "water",
    price:'$52.00',
    right: btnsTypes
  }, {
    avatarimg:"1",
    text: "oriange",
    price:'$2.00',
    right: btnsTypes
  }, {
    avatarimg:"2",
    text: "rice",
    price:'$34.00',
    right: btnsTypes
  }, {
    avatarimg:"10",
    text: "茅台",
    price:'$10000.00',
    right: btnsTypes
  }
];

export default rows;
