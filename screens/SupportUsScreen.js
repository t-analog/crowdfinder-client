import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

const SupportUsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Support Us</Text>
      </View>
      <Image style={styles.avatar} source={{ uri: 'https://media.istockphoto.com/vectors/social-love-heart-icon-isolated-on-white-background-vector-vector-id949849640?k=20&m=949849640&s=170667a&w=0&h=udCunpF_5uAceYrs8Lkk6qjmuXfbGK2LNw4myEbwcWY=' }} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.info}>Do you like this app?</Text>
          <Text style={styles.description}>You could buy us some coffee!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  body: {
    marginTop: 40,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    marginTop: 50,
    marginLeft: 20
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 60,
    alignSelf: 'center'
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});


export default SupportUsScreen;
