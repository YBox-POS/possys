import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import drawtest2 from '../views/viewtest2';


const drawtest2Item = StackNavigator(
  {
    drawtest2: {
      screen: drawtest2,
      navigationOptions: ({ navigation }) => ({
        title: 'drawtest2',
        headerLeft:(
        <Icon
            name="menu"
            size={30}
            type="material-community"
            onPress = {() => navigation.navigate('DrawerOpen')}
        />)
      })
    },
  },
);

drawtest2Item.navigationOptions = {
  drawerLabel: 'drawtest2',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="attach-money"
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

export default drawtest2Item;