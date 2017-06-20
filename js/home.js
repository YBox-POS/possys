import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Easing
} from 'react-native';
import { connect } from 'react-redux';
// import oop from '../src/modules/duck/actions';
import {quack,swim,reset} from '../src/modules/product/widgets';
// import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { Card, ListItem, Button ,Icon,Grid, Col, Row,List,SideMenu} from 'react-native-elements'
// import Drawer from 'react-native-drawer-menu';

console.log(">>>>>>>>auth oop|||||>>>>"+quack());
class Home extends Component {
  _onPressReset() {
    
    this.props.dispatch(reset());
  }

  _onPressInc() {
    this.props.dispatch(quack());
  }

  _onPressDec() {
    this.props.dispatch(swim());
  }

constructor () {
  super()
  this.state = {
    isOpen: false
  }
  this.toggleSideMenu = this.toggleSideMenu.bind(this)
}

onSideMenuChange (isOpen: boolean) {
  this.setState({
    isOpen: isOpen
  })
}

toggleSideMenu () {
  this.setState({
    isOpen: !this.state.isOpen
  })
}

  render() {
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
 
]
/*
const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            onPress={() => console.log('Pressed')}
            avatar={l.avatar_url}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))
      }
      </List>
    </View>
  )*/
//     const users = [
//  {
//     name: 'brynn',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//  },
// ]
/*
 const drawerContent = (<View style={styles.drawerContent}>
    <View style={styles.leftTop}/>
    <View style={styles.leftBottom}>
      <View><Text>Drawer Content</Text></View>
    </View>
  </View>);
  var customStyles = {
    drawer: {
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 10
    },
    mask: {}, 
    main: {} 
  };*/


    return (
      <View style={styles.container}>
{/*
<SideMenu
      isOpen={this.state.isOpen}
      onChange={this.onSideMenuChange.bind(this)}
      menu={MenuComponent}>
      <Button toggleSideMenu={this.toggleSideMenu.bind(this)} />
    </SideMenu>*/}


{/*<Drawer
      style={styles.container}
      drawerWidth={300}
      drawerContent={drawerContent}
      type={Drawer.types.Overlay}
      customStyles={{drawer: styles.drawer}}
      drawerPosition={Drawer.positions.Right}
      onDrawerOpen={() => {console.log('Drawer is opened');}}
      onDrawerClose={() => {console.log('Drawer is closed')}}
      easingFunc={Easing.ease}
    >
      <View style={styles.content}>
        <Text>{Object.values(Drawer.positions).join(' ')}</Text>
        <Text>{Object.values(Drawer.types).join(' ')}</Text>
      </View>
    </Drawer>*/}


         {/*<ScrollableTabView
      style={{marginTop: 20, }}
      renderTabBar={() => <DefaultTabBar />}>
      <Text tabLabel='Tab #1' >
          <Card
  style={{width:700,height:1500}}
  title='HELLO WORLD'
  image={require('./timg.jpeg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={{name: 'cached'}}
    backgroundColor='#000000'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
      </Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
    </ScrollableTabView>*/}


{/*<Card
  style={{width:700,height:1500}}
  title='HELLO WORLD'
  image={require('./timg.jpeg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={{name: 'cached'}}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>*/}


        {/*<Text style={styles.counter}>{this.props.counter.count}</Text>
        <TouchableOpacity style={styles.reset} onPress={()=>this._onPressReset()}>
          <Text>归零</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.start} onPress={()=>this._onPressInc()}>
          <Text>加1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stop} onPress={()=>this._onPressDec()}>
          <Text>减1</Text>
        </TouchableOpacity>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  counter: {
    fontSize: 50,
    marginBottom: 70
  },
  reset: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  start: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  stop: {
    margin: 10,
    backgroundColor: 'yellow'
  }
})

const mapStateToProps = state => ({
    counter: state.counter
})

export default connect(mapStateToProps)(Home);