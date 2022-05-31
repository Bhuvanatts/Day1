import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/screens/componentScreen';
import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/Homescreen';

export default function App(){
  return <Appcontainer/>
}


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    List:ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

const Appcontainer = createAppContainer(navigator);