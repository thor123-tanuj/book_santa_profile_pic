
import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import WelcomeScreen from './Screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTagNavigator'
import {AppDrawerNavigator} from '../Book_Santa/components/AppDrawerNavigator'
import { View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
    <AppContainer/>
    </SafeAreaProvider>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen: WelcomeScreen},
  Drawer : {screen : AppDrawerNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);