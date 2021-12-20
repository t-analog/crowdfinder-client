import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import JoinScreen from '../screens/JoinScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ff0000',
          borderRadius: 15,
          height: 90
        }
      }}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/eg.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#666666' : '#767312',
                }}
              />
              <Text
                style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 8 }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ACTIVITY"
        component={JoinScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/eg.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#666666' : '#767312',
                }}
              />
              <Text
                style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 8 }}>
                ACTIVITY
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/eg.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#666666' : '#767312',
                }}
              />
              <Text
                style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 8 }}>
                PROFILE
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;
