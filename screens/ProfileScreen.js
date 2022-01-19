import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {
  Menu, Appbar
} from 'react-native-paper';
import { logout } from '../utils/user';

const ProfileScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View>
      <Menu
        visible={menuVisible}
        style={styles.rightmenu}
        onDismiss={closeMenu}
        anchor={ <Appbar.Header style={styles.color}>
                  <Appbar.Content title=""/>
                  <Appbar.Action icon="dots-vertical" onPress={openMenu}/>
                  </Appbar.Header>
                }>
        <Menu.Item
          title="Activity Settings"
          onPress={() => {
            alert("Activity Settings clicked");
          }}
        />
        <Menu.Item
          title="Support Us"
          onPress={() => {
            alert("Support Us clicked");
          }}
        />
        <Menu.Item
          title="Logout"
          onPress={async () => {
              if (await logout()) navigation.navigate("Login");
            }
          }
        />
      </Menu>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  rightmenu: {
    top: 19,
    left: 176
  },
  color: {
    backgroundColor: 'white',
  }
});
