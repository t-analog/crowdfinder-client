import React from 'react';
import { login } from '../utils/user';
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTogglePasswordVisibility } from '../components/TogglePassword';
import styles from '../styles/stylesheet';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  return (
    <View style={styles.container}>
      {/* show variable only for debugging */}
      <Text>
        Value of email: {username}{"\n"}
        Value of password: {password}
      </Text>
      <Image
        style={styles.logo}
        source={require('../assets/cflogo.png')}
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={setUsername}
        placeholder="Email"
        placeholderTextColor="black"
        style={[styles.textInputBase, styles.textInputSmall]}
        underlineColorAndroid="transparent"
      />
      <View
        style={styles.marginTop}
      >
        <TextInput
          autoCapitalize="none"
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={passwordVisibility}
          style={[styles.textInputBase, styles.textInputSmall]}
          underlineColorAndroid="transparent"
        />
        <Pressable style={styles.icon} onPress={handlePasswordVisibility}>
          <Ionicons
            name={rightIcon}
            color={'black'}
            size={20}
          />
        </Pressable>
      </View>
      <View style={[ styles.flexEnd, styles.marginTop ]}>
        <Text
          onPress={
            () => navigation.navigate("ForgotPassword")
          }
          style={styles.forgot}
        >Forgot your password?
        </Text>
      </View>
      <View style={[ styles.spaceBetween, styles.marginTop ]}>
        <Pressable
          style={[styles.buttonBase, styles.buttonHalf]}
          onPress={
            () => navigation.navigate("Register")
          }>
          <Text style={styles.text}>Register</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonBase, styles.buttonHalf]}
          onPress={
            async () => {
              const user = await login({ username, password });
              if (user) navigation.navigate("Home");
            }
          }>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LoginScreen;
