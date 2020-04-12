import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Page11Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Page11Screen component</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Page12Stack')}
          style={styles.button}>
          <Text>Go to page 12</Text>
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
