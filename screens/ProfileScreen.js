import React from 'react';
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
import Ionicons from '@expo/vector-icons/Ionicons';

import { logout } from '../utils/user';
import styles from '../styles/stylesheet';

const ProfileScreen = ({ navigation }) => {
  const [isEditable, setIsEditable] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleIsEditable = () => setIsEditable(!isEditable);
  const toggleIsVisible = () => setIsVisible(!isVisible);

  const [email, setEmail] = React.useState("xi@cpc.cn");
  const [location, setLocation] = React.useState("Skudai, Johor");
  const [bio, setBio] = React.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus nisl lectus, sed convallis odio lacinia eget.");

  return (
    <View style={styles.container}>
      <View style={styles.flexEnd}>
        <Menu
          visible={isVisible}
          style={styles.profileMenu}
          onDismiss={toggleIsVisible}
          anchor={
            <Ionicons
              name={'menu'}
              color={'black'}
              size={20}
              onPress={toggleIsVisible}
            />
          }
        >
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
            }}
          />
        </Menu>
      </View>
      <View
        style={{
          paddingTop: 120,
        }}
      >
        <View>
          <Text style={styles.header}>Your Profile</Text>
          <Image
            style={styles.profileImage}
            source={require('../assets/profile.jpeg')} />
        </View>
        <TextInput
          autoCapitalize="none"
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          value={email}
          editable={isEditable}
          style={[styles.textInputBase, styles.textInputSmall]}
        />
        <TextInput
          autoCapitalize="none"
          onChangeText={setLocation}
          placeholder="Location"
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          value={location}
          editable={isEditable}
          style={[styles.textInputBase, styles.textInputSmall, styles.marginTop]}
        />
        <TextInput
          autoCapitalize="none"
          onChangeText={setBio}
          placeholder="Bio"
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          multiline={true}
          value={bio}
          editable={isEditable}
          style={[styles.textInputBase, styles.textInputBig, styles.marginTop]}
        />
        {
          isEditable ? (
            <View style={[styles.spaceBetween, styles.marginTop]}>
              <Pressable
                style={[styles.buttonBase, styles.buttonHalf]}
                onPress={toggleIsEditable}
              >
                <Text style={styles.text}>Confirm</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonBase, styles.buttonHalf]}
                onPress={toggleIsEditable}
              >
                <Text style={styles.text}>Cancel</Text>
              </Pressable>
            </View>
          )
            : <Pressable
              style={[styles.buttonBase, styles.buttonFull, styles.marginTop]}
              onPress={toggleIsEditable}
            >
              <Text style={styles.text}>Edit Profile</Text>
            </Pressable>
        }
      </View>
    </View>
  );
};

export default ProfileScreen;
