import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, View, Text, Image, Button, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { NavigationContainer }	from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
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
        style={styles.rightmenu}
        visible={visible}
        anchor={
          <Appbar.Header>
            <Appbar.Content title=""/>
            <Appbar.Action icon="dots-vertical"  style = {styles.zindexnegative} onPress={toggleMenu}/>
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
    <NavigationContainer style = {styles.zindex} independent="true">
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

const styles = StyleSheet.create({
  rightmenu: {
    top: 19,
    left: 176
  },
  zindexnegative: {
    elevation: -3
  }
});

export default MenuBar;
