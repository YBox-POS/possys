import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, SocialIcon, Card } from 'react-native-elements';



const log = () => {
  console.log('Attach a method here.');
};

class Buttons extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Text>test1</Text>
      </ScrollView>
    );
  }
}



export default Buttons;
