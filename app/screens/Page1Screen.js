import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Page1Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Page1Screen component</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Page2')}
          style={styles.button}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5
  }
});
