import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('There are still no authentication process for now!')
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email/Username"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            <TouchableOpacity>
            <Text style = {styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.loginButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.ButtonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.createAccButton}>
               <Text style = {styles.ButtonText}> Create an account </Text>
            </TouchableOpacity>
         </View>

      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 300
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
     paddingLeft: 230,
     marginTop: 15,
     color: 'blue',
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
