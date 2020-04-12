import React from 'react';
import {Button, Text, View, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import NavigationDrawerStructure from './NavigationDrawerStructure';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import Page1Screen from './Page1Screen';
import Page2Screen from './Page2Screen';
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
  Page11Stack: {
    screen: Page11Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 11 Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    })
  },
  Page12Stack: {
    screen: Page12Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 12 Screen'
    })
  },
});

const Service2Stack = createStackNavigator({
  Page21Stack: {
    screen: Page21Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 21 Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    })
  },
  Page22Stack: {
    screen: Page22Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 22 Screen'
    })
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Bar1Tab: {
      screen: Service1Stack,
      navigationOptions: {
        tabBarLabel: 'Tab 1',
      },
    },
    Bar2Tab: {
      screen: Service2Stack,
      navigationOptions: {
        tabBarLabel: 'Tab 2',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'home';

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

const DrawerNavigator = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: Service1Stack,
      navigationOptions: {
        drawerLabel: 'Stack 1',
      },
    },
    NavScreen2: {
      screen: Service2Stack,
      navigationOptions: {
        drawerLabel: 'Stack 2',
      },
    }
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    // contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);

const AppsNavigator = createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: SplashScreen,
      Login: LoginScreen,
      Page1: Page1Screen,
      Page2: Page2Screen,
      TabNavigatorScreen: TabNavigator,
      DrawerNavigator: DrawerNavigator
    },
    {
      initialRouteName: 'SplashScreen',
    },
  ),
);

const AppContainer = createAppContainer(AppsNavigator);
