import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const RegisterAccountScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Username"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <TextInput secureTextEntry={true} style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <TextInput secureTextEntry={true} style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Confirm Password"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.registerButton}>
        <Text style={styles.ButtonText}>Register Account</Text>
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
