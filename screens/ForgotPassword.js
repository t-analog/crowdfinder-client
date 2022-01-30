import React from 'react';
import { Text, View, Pressable, TextInput, StyleSheet } from 'react-native'
import styles from '../styles/stylesheet';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textInputBase,
          styles.textInputSmall,
        ]}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <Pressable
        style={[
          styles.buttonBase,
          styles.buttonFull,
          styles.marginTop,
        ]}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </View>
  );
}

export default ForgotPasswordScreen;
