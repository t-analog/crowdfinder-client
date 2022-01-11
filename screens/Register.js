import React from 'react';
import { register } from '../utils/user';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

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
        style={styles.input}
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
        style={styles.input}
        underlineColorAndroid="transparent"
      />
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangeConfirmPassword}
        placeholder="Confirm Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={styles.input}
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={
          async () => {
            if (password != confirmPassword) {
              console.error("Password and Confirm Password don't match");
              return;
            }
            const user = await register({ username, password });
            { user != 1 ? navigation.navigate("Home") : console.error("Failed to register") };
          }
        }>
        <Text style={styles.ButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  input: {
    paddingHorizontal: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  registerButton: {
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: 'white'
  }
});

export default RegisterAccountScreen;
