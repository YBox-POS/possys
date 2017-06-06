import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Viewtesta from '../views/viewtest';

const DrawTabView = ({ navigation }) => (
  <Viewtesta navigation={navigation} />
);



const DrawTab = StackNavigator({
  Buttons: {
    screen: DrawTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Draw',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  }
});

export default DrawTab;
