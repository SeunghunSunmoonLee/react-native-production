import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';

import anim from '../Images/3d_circle_loader.json';

export default class lottieloader extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Production :-)</Text>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 400,
              height: 400
            }}
            loop={true}
            source={anim}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a4a4a'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});
