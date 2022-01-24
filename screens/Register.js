import React from 'react';
import { register } from '../utils/user';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import styles from '../styles/stylesheet';

const RegisterAccountScreen = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>
        Value of username: {username}{"\n"}
        Value of password: {password}{"\n"}
        Value of confirmPassword: {confirmPassword}
      </Text>
      <TextInput
        style={[styles.textInput, styles.rectangleRounded]}
        autoCapitalize="none"
        onChangeText={onChangeUsername}
        placeholder="Email/Username"
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangePassword}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={[styles.textInput, styles.viewMarginTop, styles.rectangleRounded]}
        underlineColorAndroid="transparent"
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangeConfirmPassword}
        placeholder="Confirm Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={[styles.textInput, styles.viewMarginTop, styles.rectangleRounded]}
        underlineColorAndroid="transparent"
      />
      <Pressable
        style={[styles.pressableButton, styles.viewMarginTop, styles.rectangleRounded]}
        onPress={
          async () => {
            if (password != confirmPassword) {
              console.error("Password and Confirm Password don't match");
              return;
            }
            const user = await register({ username, password });
            if (user) navigation.navigate("Home");
          }
        }>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
}

export default RegisterAccountScreen;
