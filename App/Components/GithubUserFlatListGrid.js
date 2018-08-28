import React, { PureComponent } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight, Dimensions } from 'react-native'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'
import styles from './Styles/ListStyles.js'

const logo = require('../Images/top_logo.png')

const { width, height } = Dimensions.get('window')
export default class FlatListGrid extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <TouchableOpacity onPress={() => this.props.onPress('GridView', rowID, rowData)}>
        <View style={{ margin: 0.5, width: width / 3, paddingBottom: 15 }}>
          <Thumbnail square source={{uri: rowData.avatar_url}} style={styles.gridThumb} />
          <Text style={styles.gridText}>{rowData.login}</Text>
          <Text style={styles.gridText}>dreamer</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
