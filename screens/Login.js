import React, { useState } from 'react';
import { login } from '../utils/user';
import { View, Image, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTogglePasswordVisibility } from '../components/TogglePassword';
import styles from '../styles/stylesheet';

const LoginScreen = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [Password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      {/* show variable only for debugging */}
      <Text>
        Value of username: {username}{"\n"}
        Value of password: {password}
      </Text>
      <Image
        style={styles.logo}
        source={require('../assets/cflogo.png')}
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangeUsername}
        placeholder="Email/Username"
        placeholderTextColor="black"
        style={[styles.textInput, styles.rectangleRounded]}
        underlineColorAndroid="transparent"
      />
      <View
        style={styles.inputMarginTop}
      >
        <TextInput
          autoCapitalize="none"
          onChangeText={onChangePassword}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={passwordVisibility}
          style={[styles.textInput, styles.rectangleRounded]}
          underlineColorAndroid="transparent"
        />
        <Pressable style={styles.icon} onPress={handlePasswordVisibility}>
          <Ionicons
            name={rightIcon}
            color={'black'}
            size={20}
            style={styles.icons}
          />
        </Pressable>
      </View>
      <Pressable
        onPress={
          () => navigation.navigate("ForgotPassword")
        }>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </Pressable>
      <Pressable
        style={[ styles.pressableButton, styles.rectangleRounded ]}
        onPress={
          async () => {
            const user = await login({ username, password });
            if (user) navigation.navigate("Home");
          }
        }>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable
    style={[styles.pressableButton, styles.viewMarginTop, styles.rectangleRounded]}
        onPress={
          () => navigation.navigate("Register")
        }>
        <Text style={styles.text}>Register Account</Text>
      </Pressable>
    </View>
  );
}

export default LoginScreen;
