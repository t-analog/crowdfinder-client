import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email/Username"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.submitButton}>
        <Text style={styles.ButtonText}>Submit</Text>
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
  submitButton: {
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

export default ForgotPasswordScreen;
