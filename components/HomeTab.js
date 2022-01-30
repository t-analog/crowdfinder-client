import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JoinScreen from '../screens/JoinScreen';
import ProfileStack from '../components/ProfileStack';
import CreateActivityScreen from '../screens/CreateActivityScreen';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarIcon: () => (<Ionicons name={'home'} color={'white'} size={20} />),
        tabBarLabelStyle: {
          position: 'relative',
          bottom: 20
        },
        tabBarStyle: {
          backgroundColor: 'black',
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          bottom: 0,
          elevation: 1,
        }
      }}
    >
      <Tab.Screen
        name="Nearby Activity"
        component={JoinScreen}
        options={{
          tabBarIcon: () => ( <Ionicons name={'list-outline'} color={'white'} size={24}/> ),
          header: () => null
        }}
      />
      <Tab.Screen
        name="Create Activity"
        component={CreateActivityScreen}
        options={{
          tabBarIcon: () => ( <Ionicons name={'add-circle-outline'} color={'white'} size={24}/> ),
          header: () => null
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: () => ( <Ionicons name={'person-outline'} color={'white'} size={24}/> ),
          header: () => null
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;
