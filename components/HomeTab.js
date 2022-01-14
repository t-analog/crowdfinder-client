import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JoinScreen from '../screens/JoinScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateActivityScreen from '../screens/CreateActivityScreen';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarIcon: () => ( <Ionicons name={'home'} color={'white'} size={20}/> ),
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          position: 'relative',
          bottom: 20
        },
        tabBarStyle: {
          backgroundColor: '#0D1117',
          borderRadius: 15,
          bottom: 25,
          elevation: 0,
          height: 90,
          left: 20,
          position: 'absolute',
          right: 20
        }
      }}
    >
      <Tab.Screen
        name="NearbyActivity"
        component={JoinScreen}
      />
      <Tab.Screen
        name="CreateActivity"
        component={CreateActivityScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;
