import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import LaunchScreen from '../Containers/LaunchScreen'
import GithubUserListScreen from '../Containers/GithubUserListScreen'
import ListScreen from '../Containers/ListScreen'

import styles from './Styles/NavigationStyles'
import Colors from '../Themes/Colors'
// Manifest of possible screens
const PrimaryNav = TabNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ListScreen: { screen: ListScreen },
  GithubUserListScreen: { screen: GithubUserListScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'GithubUserListScreen',
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: () => {
      const { routeName } = navigation.state;
      // let label = capitalize(routeName);
      switch (routeName) {
        case 'ListScreen':
          return 'Users'
        case 'GithubUserListScreen':
          return 'Github Users'
        case 'LaunchScreen':
          return 'Home'
      }
    },
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'LaunchScreen':
          iconName = Platform.OS === 'ios' ? 'ios-home' : 'md-home';
          break;
        case 'ListScreen':
          iconName = Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts';
          break;
        case 'GithubUserListScreen':
          iconName =
            Platform.OS === 'ios' ? 'ios-people' : 'md-people';
      }
      return (
        <Ionicons
          name={iconName}
          size={Platform.OS === 'ios' ? 30 : 27}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    },
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  },
  animationEnabled: false,
  swipeEnabled: false,
})

export default PrimaryNav
