import React from 'react';
import {Button, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import Page1Screen from './Page1Screen';
import Page11Screen from './tabs/Page11Screen';
import Page12Screen from './tabs/Page12Screen';
import Page21Screen from './tabs/Page21Screen';
import Page22Screen from './tabs/Page22Screen';

export default class AppNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const Service1Stack = createStackNavigator({
  Page11Stack: {screen: Page11Screen},
  Page12Stack: {screen: Page12Screen},
});

const Service2Stack = createStackNavigator({
  Page21Stack: {screen: Page21Screen},
  Page22Stack: {screen: Page22Screen},
});

const TabNavigator = createBottomTabNavigator(
  {
    Bar1Tab: {
      screen: Service1Stack,
      navigationOptions: {
        tabBarLabel: 'Page11',
      },
    },
    Bar2Tab: {
      screen: Service2Stack,
      navigationOptions: {
        tabBarLabel: 'Page21',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'Home';

        return <Icon type="Icon" name={iconName} size={40} color={tintColor} />;
      },
    }),
    initialRouteName: 'Bar1Tab',
    tabBarOptions: {
      activeTintColor: '#F5A623',
      inactiveTintColor: 'gray',
      showLabel: true,
      style: {
        height: 55,
        backgroundColor: 'white',
        borderTopWidth: 0.8,
        borderColor: 'grey',
      },
      labelStyle: {
        marginTop: -5,
        marginBottom: 5,
      },
    },
  },
);

const AppsNavigator = createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: SplashScreen,
      Login: LoginScreen,
      Page1: Page1Screen,
      TabNavigatorScreen: TabNavigator,
    },
    {
      initialRouteName: 'SplashScreen',
    },
  ),
);

const AppContainer = createAppContainer(AppsNavigator);
