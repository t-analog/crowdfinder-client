import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, View, Text, Image, Button, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer }	from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, List } from 'react-native-paper';
import ActivitySettings from '../screens/ActivitySettings.js';
import SupportUs from '../screens/SupportUs.js';
import Logout from '../screens/Logout.js';

const Stack = createStackNavigator();

const Menu = (navigation) => {
  const [shouldShow, setShouldShow] = useState(false);
   const handleMore = () => setShouldShow(!shouldShow);
   const goActivitySettings = () => navigation.navigate("Activity Settings");
   const goSupportUs = () => navigation.navigate("Support Us");
   const goLogout = () => navigation.navigate("Logout");
  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.Action icon="dots-vertical" onPress={handleMore}/>
      </Appbar.Header>
      <View >
        {shouldShow ? (
          <List.Section>
            <List.Item title="Activity Settings" onPress={goActivitySettings}/>
            <List.Item title="Support Us" onPress={goSupportUs}/>
            <List.Item title="Logout" onPress={goLogout}/>
          </List.Section>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const MenuBar = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen
          name="Activity Settings"
          component={ActivitySettings}
          independent={false}
        />
        <Stack.Screen
          name="Support Us"
          component={SupportUs}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MenuBar;
