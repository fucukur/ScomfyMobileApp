import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

class BabyScreen extends Component {
 
  render() {
    return (
      <View style={styles.compent}>
        <Text> Merhaba Burası Çocuk Sesleri </Text>
      </View>
    );
  }
}

export default BabyScreen

const styles = StyleSheet.create({
    compent : {
      flex : 1,
    }
});