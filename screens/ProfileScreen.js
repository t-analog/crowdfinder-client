import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {
  Menu,
} from 'react-native-paper';
import { logout } from '../utils/user';

const ProfileScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        /* change this anchor component into triple-dot + style */
        anchor={<Button
                  title="View Menu"
                  onPress={openMenu}
                />}>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
});
