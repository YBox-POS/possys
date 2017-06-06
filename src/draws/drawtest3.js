import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import drawtest3 from '../views/viewtest3';


const drawtest3Item = StackNavigator(
  {
    drawtest3: {
      screen: drawtest3,
    },
  },
);

drawtest3Item.navigationOptions = {
  drawerLabel: 'drawtest3',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="star"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material-commnity"
      color={tintColor}
    />
  ),
};

export default drawtest3Item;