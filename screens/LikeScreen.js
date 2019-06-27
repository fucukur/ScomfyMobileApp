import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

class LikeScreen extends Component {
 
  render() {
    return (
      <View style={styles.compent}>
        <Text> Merhaba Burası Beğenilen Sesler </Text>
      </View>
    );
  }
}

export default LikeScreen

const styles = StyleSheet.create({
    compent : {
      flex : 1,
    }
});