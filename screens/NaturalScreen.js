import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var sColor = '#a380e4';
var sLenght = 75;
class NaturalScreen extends Component {
 
  render() {
    return (
      <View style={styles.compent}>
        <View style={styles.option}>
          <Ionicons  name='md-heart' size={sLenght} color={sColor} />
        </View>
        <View style={styles.option}>
          <Ionicons  name='md-heart' size={sLenght} color={sColor} />
        </View>
        <View style={styles.option}>
          <Ionicons  name='md-heart' size={sLenght} color={sColor} />
        </View>
      </View>
    );
  }
}

export default NaturalScreen

const styles = StyleSheet.create({
    compent : {
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'center',
      flex : 1,
      padding: 50
    },
    option : {
      justifyContent:'flex-start',
      alignItems:'flex-start',
      padding: 25,
      margin:5,
      flexDirection:'row',
    }
});