import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable
} from 'react-native';
import {
  Menu, Appbar
} from 'react-native-paper';
import { logout } from '../utils/user';
import styles from '../styles/Stylesheet';

const ProfileScreen = ({ navigation }) => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);
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
                editable={edit} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Email</Text>
              <TextInput style={styles.boxB}
                underlineColorAndroid="transparent"
                placeholder="xi@cpc.cn"
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={edit} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Location</Text>
              <TextInput style={styles.boxB}
                underlineColorAndroid="transparent"
                placeholder="Skudai"
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={edit} />
            </View>
            <View style={styles.boxA}>
              <Text style={styles.data}>Bio</Text>
              <TextInput style={styles.boxB2}
                multiline={true}
                underlineColorAndroid="transparent"
                placeholder="President of the People's Republic of China & General Secretary of the Communist Party of China."
                placeholderTextColor="black"
                autoCapitalize="none"
                editable={edit} />
            </View>
            {
              edit?(
                <View style={styles.row}>
                  <Pressable
                    style={styles.buttonSplit}
                    onPress={toggleEdit}
                    >
                    <Text style={styles.ButtonText}>Confirm</Text>
                  </Pressable>
                  <Pressable
                    style={styles.buttonSplit}
                    onPress={toggleEdit}
                    >
                    <Text style={styles.ButtonText}>Cancel</Text>
                  </Pressable>
                </View>
              )
              :<Pressable
                style={styles.button}
                onPress={toggleEdit}
                >
                <Text style={styles.ButtonText}>Edit Profile</Text>
              </Pressable>
            }
          </View>
    </View>
  );
};

export default ProfileScreen;
