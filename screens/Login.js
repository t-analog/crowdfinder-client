import React from 'react';
import Tabs from '../components/HomeTab';
import RegisterScreen from './Register';
import ForgotPasswordScreen from './ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/cflogo.png')}
      />
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email/Username"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <TextInput secureTextEntry={true} style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <TouchableOpacity
        onPress={
          () => navigation.navigate("Forgot Password")
        }>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={
          () => navigation.navigate("Home Screen")
        }>
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccButton}
        onPress={
          () => navigation.navigate("Register Account")
        }>
        <Text style={styles.ButtonText}>Register Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const LoginStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="Register Account"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Home Screen"
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  logo: {
    aspectRatio: 1.81,
    width: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    resizeMode: 'contain'
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
  forgot: {
    padding: 15,
    color: 'blue',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccButton: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: -5,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: 'white'
  }
});

export default LoginStack;
