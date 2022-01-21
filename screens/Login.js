import React from 'react';
import { login } from '../utils/user';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
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
      <View
        style={styles.input}
      >
        <Ionicons 
          name={'person'} 
          color={'black'} 
          size={20} 
          style={styles.icons}
        />
        <TextInput
          autoCapitalize="none"
          onChangeText={onChangeUsername}
          placeholder="Email/Username"
          placeholderTextColor="black"
          style={styles.loginInput}
          underlineColorAndroid="transparent"
        />
      </View>

      <View 
        style={styles.input}
      >
        <Ionicons 
          name={'lock-closed'} 
          color={'black'} 
          size={20} 
          style={styles.icons}
        />
        <TextInput
          autoCapitalize="none"
          onChangeText={onChangePassword}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          style={styles.loginInput}
          underlineColorAndroid="transparent"
        />
      </View>
      
      <TouchableOpacity
        onPress={
          () => navigation.navigate("ForgotPassword")
        }>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={
          async () => {
            const user = await login({ username, password });
            if (user) navigation.navigate("Home");
          }
        }>
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccButton}
        onPress={
          () => navigation.navigate("Register")
        }>
        <Text style={styles.ButtonText}>Register Account</Text>
      </TouchableOpacity>
    </View>
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
    padding: (10, 10, 15, 10),
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    height: 40,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    borderColor: '#000',
    paddingBottom: 10,
    borderWidth:1,
    borderRadius: 10
  },
  loginInput: {
    flex: 1,
    paddingHorizontal: 10
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
    borderRadius: 10
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
    borderRadius: 10
  },
  ButtonText: {
    color: 'white'
  },
  icons: {
    // position: 'absolute',
    // bottom: 
    marginLeft: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default LoginScreen;
