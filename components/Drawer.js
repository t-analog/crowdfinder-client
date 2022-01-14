import * as React from 'react';
import {View, Text, Image, Button, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer }	from '@react-navigation/native';
import ActivitySettings from '../screens/ActivitySettings.js';
import SupportUs from '../screens/SupportUs.js';
import Logout from '../screens/Logout.js';

const Drawer = createDrawerNavigator();

export default function App() {
return (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
      drawerType:"back",
      drawerPosition: "right",
      }}>
    <Drawer.Screen name="Activity Settings" component={ActivitySettings} />
    <Drawer.Screen name="Support Us" component={SupportUs} />
    <Drawer.Screen name="Logout" component={Logout} />
  </Drawer.Navigator>
);
}
