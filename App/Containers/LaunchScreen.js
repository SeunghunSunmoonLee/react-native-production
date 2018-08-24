import React, { Component } from 'react'
import { Animated, StyleSheet, Image, Easing, ScrollView, Text, View } from 'react-native'
import axios from 'axios'
import { UltimateListView, UltimateRefreshView } from 'react-native-ultimate-listview'
import { connect } from 'react-redux'

import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import UsersActions from '../Redux/Users'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

const spinStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
class Spin extends React.Component {
  // state = {
    // fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  // }
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
    this.timing = 3000
  }

  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: this.timing,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render () {
    /* This also works, to show functions instead of strings */
    // const getStartValue = () => '0deg'
    // const getEndValue = () => '360deg'
    // const spin = this.spinValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [getStartValue(), getEndValue()]
    // })
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={spinStyles.container}>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
      </View>
    )
  }

}

class LaunchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUploading: false,

    }
  }
  async componentDidMount() {
    this.setState({
      isUploading: true,
    })
    const apiOptions = {
      method: 'GET',
      url: 'http://reqres.in/api/users',
    };
    try {
      const response = await axios(apiOptions)
      const users = response.data.data
      this.setState({
        isUploading: false,
        users
      });
      console.log("===api users", users)
      this.props.getUsers(users)
    } catch (error) {
      console.error(error);
    }
  }
  render () {
    let { isUploading } = this.state;

    // return (
    //   <View style={styles.mainContainer}>
    //     <UltimateRefreshView onRefresh={this.onRefresh}>
    //
    //     </UltimateRefreshView>
    //
    //     <UltimateListView
    //        ref={ref => this.listView = ref}
    //        key={this.state.layout}
    //        onFetch={this.onFetch}
    //        keyExtractor={(item, index) => `${index} - ${item}`}
    //        refreshableMode="advanced" // basic or advanced
    //        item={this.renderItem} // this takes three params (item, index, separator)
    //        displayDate
    //        arrowImageStyle={{ width: 20, height: 20, resizeMode: 'contain' }}/>
    //   </View>
    // )
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Spin />
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isnt what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: (payload) => dispatch(UsersActions.getUsers(payload))
})

export default connect(null, mapDispatchToProps)(LaunchScreen)
