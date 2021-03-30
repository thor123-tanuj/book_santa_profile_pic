  
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from '../components/AppTagNavigator'
import CustomSideBarMenu from '../components/CustomSideBarMenu'
import MyDonationScreen from '../Screens/MyDonationScreen';
import MyRecievedBooks from '../Screens/MyRecievedBooks';
import NotificationsScreen from '../Screens/NotificationsScreen';
import SettingScreen from '../Screens/SettingScreen';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    Settings : {
      screen : SettingScreen
    },
    Notifications : {
      screen : NotificationsScreen
    },
    Donations : {
      screen : MyDonationScreen
    },
    RecievedBooks : {
      screen : MyRecievedBooks
    }

  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })