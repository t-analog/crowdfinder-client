import React from 'react';
import { register } from '../utils/user';
import {
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import styles from '../styles/stylesheet';

const RegisterAccount = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  return (
    <View style={styles.container}>
      {/* <Text> */}
      {/*   Value of username: {username}{"\n"} */}
      {/*   Value of password: {password}{"\n"} */}
      {/*   Value of confirmPassword: {confirmPassword} */}
      {/* </Text> */}
      <TextInput
        style={[styles.textInputBase, styles.textInputSmall]}
        autoCapitalize="none"
        onChangeText={setUsername}
        placeholder="Email/Username"
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={[styles.textInputBase, styles.textInputSmall, styles.marginTop]}
        underlineColorAndroid="transparent"
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={[styles.textInputBase, styles.textInputSmall, styles.marginTop]}
        underlineColorAndroid="transparent"
      />
      <Pressable
        style={[styles.buttonBase, styles.buttonFull, styles.marginTop]}
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
        <Text style={styles.text}>Register</Text>
      </Pressable>
    </View>
  );
}

export default RegisterAccount;
