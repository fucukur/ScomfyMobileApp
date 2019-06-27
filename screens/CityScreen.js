import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

class CityScreen extends Component {
 
  render() {
    return (
      <View style={styles.compent}>
        <Text> Merhaba Burası Şehir Sesleri </Text>
      </View>
    );
  }
}

export default CityScreen

const styles = StyleSheet.create({
    compent : {
      flex : 1,
    }
});