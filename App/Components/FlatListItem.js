import React, { PureComponent } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'
import styles from './Styles/ListStyles.js'

const logo = require('../Images/top_logo.png')

export default class FlatListItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{uri: rowData.avatar}} style={styles.thumb} />
        </Left>
        <Body style={{ borderBottomWidth: 0 }}>
          <Text>{rowData.first_name} {rowData.last_name}</Text>
          <Text note>dreamer</Text>
        </Body>
        <Right style={{ borderBottomWidth: 0 }}>
          <View style={styles.rightBtnGroup}>
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('chat', rowID, rowData)}
              style={styles.rightBtn}
            >
              <Icon name="chatbubbles" style={styles.rightBtnIcon} />
            </Button>
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('like', rowID, rowData)}
              style={styles.rightBtn}
            >
              <Icon name="heart" style={styles.rightBtnIcon} />
            </Button>
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('share', rowID, rowData)}
              style={styles.rightBtn}
            >
              <Icon name="share" style={styles.rightBtnIcon} />
            </Button>
          </View>
        </Right>
      </ListItem>
    )
  }
}
