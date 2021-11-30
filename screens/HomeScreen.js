import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet, TouchableOpacity, TextInput,Image} from 'react-native';

const HomeScreen= ({navigation}) => {
  const [shouldShow, setshouldShow] = useState(false);
  	return (
  	<SafeAreaView style={{flex: 1}}>
  <View style={styles.container}>
  {
  	shouldShow ? (
      <View>
        <TextInput style = {styles.input}
           underlineColorAndroid = "transparent"
           placeholder = "Event's Name"
           placeholderTextColor = "black"
           autoCapitalize = "none"/>

         <TextInput style = {styles.input}
           underlineColorAndroid = "transparent"
           placeholder = "Description"
           placeholderTextColor = "black"
           autoCapitalize = "none"/>

         <TextInput style = {styles.input}
           underlineColorAndroid = "transparent"
           placeholder = "Capacity"
           placeholderTextColor = "black"
           autoCapitalize = "none"/>

         <TextInput style = {styles.input}
           underlineColorAndroid = "transparent"
           placeholder = "Category"
           placeholderTextColor = "black"
           autoCapitalize = "none"/>

         <TextInput style = {styles.input}
           underlineColorAndroid = "transparent"
           placeholder = "Location"
           placeholderTextColor
           autoCapitalize = "none"/>

         <TouchableOpacity
           style = {styles.input}
           onPress={() => setshouldShow(!shouldShow)}>
           <Text style = {styles.ButtonText}> Cancel </Text>
          </TouchableOpacity>

         <TouchableOpacity
           style = {styles.loginButton}
           >
           <Text style = {styles.ButtonText}> Create </Text>
          </TouchableOpacity>
      </View>
  	) : null
  }

  <Button
   title="Create Activity"
   onPress={() => setshouldShow(!shouldShow)}
  />
  </View>
  </SafeAreaView>
  	);
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
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
loginButton: {
  paddingHorizontal: 10,
  marginTop: 15,
  marginRight: 15,
  marginLeft: 15,
  marginBottom: 150,
  height: 40,
  borderColor: 'black',
  borderWidth: 1
}
});
