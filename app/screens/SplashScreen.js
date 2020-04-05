import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    this.props.navigation.navigate('TabNavigatorScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SplashScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
