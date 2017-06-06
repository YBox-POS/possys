import React, { Component } from 'react';
import { View, ScrollView, Image, ListView, StyleSheet } from 'react-native';

import { Grid, Row, Col, Card, Text ,Button, CheckBox} from 'react-native-elements';

import GridView from 'react-native-gridview';



class Buttons extends Component {
  render() {
    const { navigation } = this.props;

//
const itemsPerRow = 3;
const data = Array(20)
  .fill(null)
  .map((item, index) => index + 1);
const randomData = [];


for (let i = 0; i < data.length; i) {
  const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
  randomData.push(data.slice(i, endIndex));
  i = endIndex;
}
const dataSource = new GridView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
}).cloneWithRows(randomData);
//

    return (
      <ScrollView>
        <Grid >
          <Col size={70}>
            <GridView
      data={data}
      dataSource={this.props.randomizeRows ? dataSource : null}
      itemsPerRow={itemsPerRow}
      renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
        return (
          <View style={{ flex: 1, backgroundColor: '#8F8', borderWidth: 1 }}>
            <Text>{`${item} (${sectionID}-${rowID}-${itemIndex}-${itemID})`}</Text>
          </View>
        );
      }}
    />
          </Col>
          <Col size={30}>
            <Card >
              <CheckBox
                title='Click Here'
              />
              <CheckBox
                center
                title='Click Here'
              />
              <CheckBox
                center
                title='Click Here'
              />
              <CheckBox
                center
                title='Click Here'
              />
              <CheckBox
                center
                title='Click Here'
              />
              <CheckBox
                center
                title='Click Here'
              />
              <CheckBox
                center
                title='Click Here'
              />
              <CheckBox
                center
                title='Click Here'
              />
            </Card>
          </Col>
        </Grid>
        
      </ScrollView>
    );
  }
}


export default Buttons;
