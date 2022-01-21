import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import styles from '../styles/stylesheet';

const SupportUsScreen = () => {
  return (
    <View>
      <View style={styles.headerBackground}>
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

export default SupportUsScreen;
