import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, View, Text, Image, Button, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { NavigationContainer }	from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, List } from 'react-native-paper';
import ActivitySettings from '../screens/ActivitySettings.js';
import SupportUs from '../screens/SupportUs.js';
import Logout from '../screens/Logout.js';

const Stack = createStackNavigator();

const MenuDot = ({navigation}) => {
   const [visible, setVisible] = useState(false);
   const toggleMenu = () => setVisible(!visible);
   const goActivitySettings = () => navigation.navigate("Activity Settings");
   const goSupportUs = () => navigation.navigate("Support Us");
   const goLogout = () => navigation.navigate("Logout");
  return (
    <View>
      <Menu
        visible={visible}
        anchor={<Appbar.Header>
        <Appbar.Content title=""/>
        <Appbar.Action icon="dots-vertical" onPress={toggleMenuMenu}/>
      </Appbar.Header>}
        onRequestClose={toggleMenu}
        >
        <MenuItem onPress={goActivitySettings} onRequestClose={toggleMenu}>Activity Settings</MenuItem>
        <MenuItem onPress={goSupportUs} onRequestClose={toggleMenu}>Support Us</MenuItem>
        <MenuItem onPress={goLogout} onRequestClose={toggleMenu}>Logout</MenuItem>
      </Menu>
    </View>
  );
};
const MenuBar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MenuDot"
          component={MenuDot}
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
