import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ButtonsHome from './buttons_home';
const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);



const ButtonsTab = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Buttons',
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
    }),
  }
});

const Home = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Buttons',
     
      },
    },
  },
  {
    initialRouteName: 'ButtonsTab',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

Home.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
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

export default Home;