import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HeaderScreen from './screens/HeaderScreen'
import TabsNavigation from './navigation/TabBarNavigator'
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <HeaderScreen />
        </View>
        <View style={styles.content}>
          <TabsNavigation />
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fcf7ff',
  },
  header : {
      justifyContent: 'flex-start',
      alignItems: 'center',
      width :'100%',
      backgroundColor:'#fcf7ff',
      height : 60,
  },
  content :{
    flex:1,
    zIndex : 9,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width :'100%',
  }
});
