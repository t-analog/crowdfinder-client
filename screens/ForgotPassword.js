import React from 'react';
import { Text, View, Pressable, TextInput, StyleSheet } from 'react-native'
import styles from '../styles/stylesheet';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email/Username"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <Pressable
        style={styles.applyButton}>
        <Text style={styles.ButtonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

export default ForgotPasswordScreen;
