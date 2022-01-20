import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
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
            navigation.navigate("Activity Settings")
          }}
        />
        <Menu.Item
          title="Support Us"
          onPress={() => {
            navigation.navigate("Support Us")
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
      <View style={styles.container}>
            <Text style={styles.header}>Your Profile</Text>
            <Image
              style={styles.profile}
              source={require('../assets/profile.jpeg')} />
            <View style={styles.boxA}>
              <Text style={styles.data}>Username</Text>
              <TextInput style={styles.boxB}
                underlineColorAndroid="transparent"
                placeholder="@xijinping"
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={false} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Email</Text>
              <TextInput style={styles.boxB}
                underlineColorAndroid="transparent"
                placeholder="xi@cpc.cn"
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={false} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Location</Text>
              <TextInput style={styles.boxB}
                underlineColorAndroid="transparent"
                placeholder="Skudai"
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={false} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Bio</Text>
              <TextInput style={styles.boxB2}
                multiline={true}
                underlineColorAndroid="transparent"
                placeholder="President of the People's Republic of China & General Secretary of the Communist Party of China."
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={false} />
            </View>
            <Pressable
              style={styles.button}
              onPress={
                () => alert('Edit Profile!')
              }>
              <Text style={styles.ButtonText}>Edit Profile</Text>
            </Pressable >
          </View>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  rightmenu: {
    top: 19,
    left: 258
  },
  color: {
    backgroundColor: 'white',
  },
  container: {
    paddingTop: 100,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 40
  },
  data: {
    fontSize: 16
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    position: 'absolute',
    right: 10,
    top: 5
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxA: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxB: {
    marginTop: -5,
    justifyContent: 'space-between',
    color: "black",
    fontSize: 16
  },
  boxB2: {
    marginTop: -5,
    marginRight: 9,
    paddingTop: 28,
    justifyContent: 'space-between',
    color: "black",
    fontSize: 16
  },
  button: {
    padding: 10,
    marginTop: 30,
    marginBottom: 365,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: 'white',
    fontSize: 16
  }
});
