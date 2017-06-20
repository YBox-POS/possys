import React, { Component } from 'react';
import { View, ScrollView, Image, ListView, StyleSheet } from 'react-native';
// import elements
import { Grid, Row, Col, Card, Text ,Button, CheckBox,PricingCard,ListItem,List,Avatar} from 'react-native-elements';
//import swipout
import Swipeout from 'react-native-swipeout';
import rows from './data';
import styles from './styles';

import GridView from 'react-native-super-grid';


class Buttons extends Component {

  constructor() {
    super();

    //  datasource rerendered when change is made (used to set swipeout to active)
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});

    this.state = {
      dataSource: ds.cloneWithRows(rows),
      sectionID: null,
      rowID: null,
    };
  }
_renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <Swipeout
        close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        left={rowData.left}
        right={rowData.right}
        rowID={rowID}
        sectionID={sectionID}
        autoClose={rowData.autoClose}
        backgroundColor={rowData.backgroundColor}
        onOpen={(sectionID, rowID) => {
          this.setState({
            sectionID,
            rowID,
          })
        }}
        onClose={() => console.log('===close') }
        scroll={event => console.log('scroll event'+'-|sectionID-->'+sectionID+'|-rowId-->'+rowID) }
      >
          <View style={styles.li} >
            <Grid>
              <Col size={23}>
                <Avatar
                  small
                  rounded
                  title={rowData.avatarimg}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}/>
              </Col>
             <Col size={33}><Text style={styles.liText}>{rowData.text}</Text></Col>
             <Col size={34}><Text style={styles.liText}>{rowData.price}</Text></Col>
             <Col size={10}><CheckBox/></Col>
            
          </Grid>
          </View>
          
      </Swipeout>
    );
  }
  render() {
    const { navigation } = this.props;

    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    ];

    return (
      <ScrollView>
        <Grid >
          <Col size={60}>
      <GridView
        itemWidth={120}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />

          </Col>
          <Col size={40}>
            <View style={styles.container}>
              <View style={styles.statusbar}/>
              <View style={styles.navbar}><Text style={styles.navbarTitle}>Check</Text></View>
              <ListView
                scrollEnabled
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                style={styles.listview}
              />
            </View>
          </Col>
        </Grid>
        
      </ScrollView>
    );
  }
}



export default Buttons;
