import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import tabtest from '../tabs/tabtest';


const drawtest = TabNavigator(
  {
    tabtest: {
      screen: tabtest,
      path: '/tabtests',
      navigationOptions: {
        tabBarLabel: 'tabtests',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'tabtest',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

drawtest.navigationOptions = {
  drawerLabel: 'drawtest',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="bluetooth"
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

export default drawtest;