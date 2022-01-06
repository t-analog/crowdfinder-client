import React from 'react';
import {View, Text, Image, Button, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const ProfileScreen= ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Profile</Text>
       <Image
         style={styles.profile}
         source={require('../assets/profile.jpeg')} />
       <Text style={styles.data}>@xijinping</Text>
       <Text style={styles.data}>xi@cpc.cn</Text>
       <Text style={styles.data}>Skudai</Text>
       <TextInput secureTextEntry={false} multiline={true} style={styles.input}
         underlineColorAndroid="transparent"
         placeholder="President of the People's Republic of China & General Secretary of the Communist Party of China."
         placeholderTextColor="black"
         autoCapitalize="none"
         editable={false} />
       <TouchableOpacity
         style={styles.button}>
         <Text style={styles.ButtonText}>Edit Profile</Text>
       </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 40
  },
  data: {
    marginLeft: 15,
    fontSize: 15
  },
  profile: {
    width: 120, 
    height: 120, 
    borderRadius: 120/ 2,
    position: 'absolute',
    right: 10,
    top: 5
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    height: 60,
    borderColor: 'black',
    borderWidth: 1
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 30,
    marginBottom: 365,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: 'white'
  }
});
