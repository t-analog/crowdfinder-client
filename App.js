import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//import Inputs from './screens/login.js';
import Tabs from './components/tab.js';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  //  <Inputs />
  );
}
