import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform,Text } from 'react-native';




const log = () => {
  console.log('Attach a method here.');
};

class viewtest extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Text>test2</Text>
      </ScrollView>
    );
  }
}



export default viewtest;
