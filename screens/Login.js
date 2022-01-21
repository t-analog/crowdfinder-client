import React from 'react';
import { login } from '../utils/user';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import styles from '../styles/stylesheet';

const LoginScreen = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
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
        style={styles.input}
        underlineColorAndroid="transparent"
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangePassword}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={styles.input}
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity
        onPress={
          () => navigation.navigate("ForgotPassword")
        }>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={
          async () => {
            const user = await login({ username, password });
            if (user) navigation.navigate("Home");
          }
        }>
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={
          () => navigation.navigate("Register")
        }>
        <Text style={styles.ButtonText}>Register Account</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
