import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JoinScreen from '../screens/JoinScreen';
import ProfileStack from '../components/ProfileStack';
import CreateActivityScreen from '../screens/CreateActivityScreen';

import { MapContext } from '../utils/globalState'

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const [mapState, setMapState] = React.useState({
      latitude: 1.56139,
      longitude: 103.62924,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
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
        name="Nearby Activity"
        options={{
          tabBarIcon: () => (<Ionicons name={'list-outline'} color={'white'} size={24} />),
          header: () => null
        }}
      >
        {() => (
          <MapContext.Provider value={[mapState, setMapState]}>
            <JoinScreen />
          </MapContext.Provider>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Create Activity"
        options={{
          tabBarIcon: () => (<Ionicons name={'add-circle-outline'} color={'white'} size={24} />),
          header: () => null
        }}
      >
        {() => (
          <MapContext.Provider value={[mapState, setMapState]}>
            <CreateActivityScreen />
          </MapContext.Provider>
        )}
      </Tab.Screen>
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
