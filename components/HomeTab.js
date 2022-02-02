import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Geolocation from 'react-native-geolocation-service';

import ActivityNearby from '../screens/ActivityNearby';
import ProfileStack from '../components/ProfileStack';
import CreateActivity from '../screens/CreateActivity';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
      },
      (error) => {
        // console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 300000,
        maximumAge: 300000,
        forceRequestLocation: true,
        showLocationDialog: true,
      }
    );
  });

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
        name="Activity Nearby"
        component={ActivityNearby}
        options={{
          tabBarIcon: () => (<Ionicons name={'list-outline'} color={'white'} size={24} />),
          header: () => null
        }}
      />
      <Tab.Screen
        name="Create Activity"
        component={CreateActivity}
        options={{
          tabBarIcon: () => (<Ionicons name={'add-circle-outline'} color={'white'} size={24} />),
          header: () => null
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: () => (<Ionicons name={'person-outline'} color={'white'} size={24} />),
          header: () => null
        }}
      >
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default HomeTab;
