import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './components/tab.js';

const Stack = createStackNavigator();

function Login({navigation}) {
  return (
    <View style = {styles.container}>
       <Image
          style={styles.logo}
          source={require('./assets/cflogo.png')} />

       <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email/Username"
          placeholderTextColor = "black"
          autoCapitalize = "none"/>

       <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "black"
          autoCapitalize = "none"/>
       <TouchableOpacity
       onPress = {
          () => navigation.navigate("Forgot Password")
       }>
       <Text style = {styles.forgot}>Forgot your password?</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style = {styles.loginButton}>
          <Text style = {styles.ButtonText}> Login </Text>
       </TouchableOpacity>

       <TouchableOpacity
          style = {styles.createAccButton}
          onPress = {
             () => navigation.navigate("Register Account")
          }>
          <Text style = {styles.ButtonText}> Create an account </Text>
       </TouchableOpacity>
    </View>
)
}
function ForgotPassword() {
  return (
    <View style = {styles.container}>

                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Email/Username"
                   placeholderTextColor = "black"
                   autoCapitalize = "none"/>

                <TouchableOpacity
                   style = {styles.submitButton}>
                   <Text style = {styles.ButtonText}> Submit </Text>
                </TouchableOpacity>
             </View>
)
}
function RegisterAccount() {
  return (
    <View style = {styles.container}>

                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Username"
                   placeholderTextColor = "black"
                   autoCapitalize = "none"/>

                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Email"
                   placeholderTextColor = "black"
                   autoCapitalize = "none"/>

                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Password"
                   placeholderTextColor = "black"
                   autoCapitalize = "none"/>

                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Confirm Password"
                   placeholderTextColor = "black"
                   autoCapitalize = "none"/>

                <TouchableOpacity
                   style = {styles.registerButton}>
                   <Text style = {styles.ButtonText}> Register Account </Text>
                </TouchableOpacity>

             </View>
)
}
export default function App() {
  return (
<NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
          name = "Login"
          component = {Login}
          options={{header: () => null
       }}
       />
       <Stack.Screen
          name = "Forgot Password"
          component = {ForgotPassword}
       />
       <Stack.Screen
          name = "Register Account"
          component = {RegisterAccount}
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
    aspectRatio:1.81,
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
   registerButton: {
      backgroundColor: 'black',
      padding: 10,
      margin: 15,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
   },
   submitButton: {
     backgroundColor: 'black',
     padding: 10,
     margin: 15,
     height: 40,
     alignItems: 'center',
     justifyContent: 'center',
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
  ButtonText:{
     color: 'white'
  }
})
