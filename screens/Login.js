import React, {useState} from 'react';
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
        style={styles.input}
        underlineColorAndroid="transparent"
      />
      <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangePassword}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={passwordVisibility}
        style={styles.inputLeft}
        underlineColorAndroid="transparent"
      />
      <Pressable style={styles.inputIcon} onPress={handlePasswordVisibility}>
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
        style={styles.loginButton}
        onPress={
          async () => {
            const user = await login({ username, password });
            if (user) navigation.navigate("Home");
          }
        }>
        <Text style={styles.ButtonText}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.registerButton}
        onPress={
          () => navigation.navigate("Register")
        }>
        <Text style={styles.ButtonText}>Register Account</Text>
      </Pressable>
    </View>
  );
}

export default LoginScreen;
