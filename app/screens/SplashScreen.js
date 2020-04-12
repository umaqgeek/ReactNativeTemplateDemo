import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('DrawerNavigator');
    }, 1500);
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
