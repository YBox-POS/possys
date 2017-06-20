import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsHome from '../views/buttons_home';

const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);



const ButtonsTab = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Buttons',
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

export default ButtonsTab;
