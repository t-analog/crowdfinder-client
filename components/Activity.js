import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

import styles from '../styles/stylesheet';

const Activity = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.textItems}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemText}>{props.description}</Text>
        <View style={{ flexDirection: "row" }}>
          {props.categories.map((category, id) => (
            <Category key={id} text={category} />
          ))}
        </View>
        <Text style={styles.itemText}>{props.location}</Text>
        <View style={styles.itemBot}>
          <TextInput
            autoCapitalize="none"
            placeholder="0 / 3"
            placeholderTextColor="black"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Button
            title="   Join    "
            onPress={
              () => alert('Joined!')
            }
          />
        </View>
      </View>
    </View>
  )
};

const Category = (props) => {
  return (
    <View style={styles.category}>
      <Text style={styles.textCategory}>{props.text}</Text>
    </View>
  )
};

export default Activity;
