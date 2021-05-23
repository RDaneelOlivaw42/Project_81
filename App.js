import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from "./Screens/loginScreen";
import { TabNavigator } from './components/AppTabNavigator';


export default class App extends React.Component {

  render(){
    return(
      <AppContainer />
    )
  }

}


const SwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  TabNavigator: { screen: TabNavigator }
});

const AppContainer = createAppContainer(SwitchNavigator);