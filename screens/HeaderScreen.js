import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Scomfy</Text>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    color: '#8051d1',
    borderBottomColor: '#8051d1',
    textAlign: 'center',
    margin: 10,
    padding : 10,
    borderBottomWidth: 3,
  },
});
