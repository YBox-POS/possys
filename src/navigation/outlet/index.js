import React from 'react';
import { StackNavigator } from 'react-navigation';
import { put } from 'redux-saga/effects'
import { Icon } from 'react-native-elements';

import drawtest2 from './viewtest2';


const drawtest2Item = StackNavigator(
  {
    drawtest2: {
      screen: drawtest2,

      navigationOptions: ({ navigation }) => ({
        title: 'drawtest2',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
      })
    },
  },
  // onTransitionEnd=function* (){
  //     yield put({
  //     type:imageType.ON_IMAGES,
  //     payload: []
  //   })}
);

drawtest2Item.navigationOptions = {
  drawerLabel: 'drawtest2Item',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="accessibility"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      color={tintColor}
      type="material-icons"
    />
  ),

};


export default drawtest2Item;