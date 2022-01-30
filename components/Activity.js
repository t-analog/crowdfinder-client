import React from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';

import styles from '../styles/stylesheet';

const Activity = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.emptyBoxBase, styles.emptyBoxSmall]}>
          <Text style={styles.itemTitle}>{props.title}</Text>
        </View>
        <View style={[styles.emptyBoxBase, styles.emptyBoxMedium, styles.marginTop]}>
          <Text style={[styles.itemText]}>{props.description}</Text>
        </View>
        <View style={[styles.flexStart, styles.emptyBoxBase, styles.emptyBoxSmall, styles.marginTop]}>
          {props.categories.map((category, id) => (
            <Category key={id} text={category} />
          ))}
        </View>
        <View style={[styles.emptyBoxBase, styles.emptyBoxSmall, styles.marginTop]}>
          <Text style={styles.itemText}>{props.location}</Text>
        </View>
        <View style={[styles.spaceBetween, styles.marginTop]}>
          <View style={[styles.emptyBoxBase, styles.emptyBoxSmall]}>
            <Text>
              0 / 3
            </Text>
          </View>
          <Pressable
            style={[styles.buttonBase, styles.buttonHalf]}
            onPress={
              () => alert('Joined!')
            }
          >
            <Text style={styles.text}>Login</Text>
          </Pressable>
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
