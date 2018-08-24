import { TabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import ListScreen from '../Containers/ListScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ListScreen: { screen: ListScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
