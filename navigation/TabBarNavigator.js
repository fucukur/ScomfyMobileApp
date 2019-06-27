import React from 'react';
import { View, Text } from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CityScreen from '../screens/CityScreen'
import NaturalScreen from '../screens/NaturalScreen'
import BabyScreen from '../screens/BabyScreen'

const TabNavigator = createBottomTabNavigator({
    Natural : NaturalScreen,
    City : CityScreen,
    Baby :BabyScreen,
    Like : CityScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'City') {
          iconName = 'md-business';
        }else if(routeName ==='Natural'){
          iconName = 'ios-leaf';
        }else if(routeName === 'Baby'){
           iconName = 'md-happy';
        }else if(routeName === 'Like'){
            iconName = 'md-heart';
         }
        return <Ionicons name={iconName} size={45} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: '#182648',
        height:50,
        padding : 8,
      },
      showLabel: false,
      activeTintColor: '#a375f0',
      inactiveTintColor: '#455581',
    },
  });

const TabsNavigation = createAppContainer(TabNavigator);
export default TabsNavigation;
