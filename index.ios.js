/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {AppRegistry,View, Image, Dimensions} from 'react-native';
import main from './src/modules/product/product';
import React from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';


import Home from './src/draws/home';
import Navtest from './src/draws/drawtest';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
  
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainRoot = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home,
    },
    Navtest:{
      path:'/drawtest',
      screen:Navtest,
    }
  },
  {
    initialRouteName: 'Home',
   
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.2,
    contentComponent: CustomDrawerContentComponent,
  }
);

AppRegistry.registerComponent('possystem', () => MainRoot);
