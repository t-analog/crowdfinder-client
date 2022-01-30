import React from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';

import styles from '../styles/stylesheet';

const Activity = (props) => {
  return (
    <View style={{

    }}>
      <View style={[
        styles.flexStart,
        styles.emptyBoxBase,
        styles.emptyBoxSmall,
      ]}>
        <Text>{props.title}</Text>
      </View>
      <View style={[
        styles.flexStart,
        styles.emptyBoxBase,
        styles.emptyBoxMedium,
        styles.marginTop]}>
        <Text>{props.description}</Text>
      </View>
      <View style={[
        styles.flexStart,
        styles.emptyBoxBase,
        styles.emptyBoxSmall,
        styles.marginTop,
        /* { */
        /*   alignItems: 'center' */
        /* } */
      ]}>
        {props.categories.map((category, id) => (
          <Category key={id} text={category} />
        ))}
      </View>
      <View style={[
        styles.flexStart,
        styles.emptyBoxBase,
        styles.emptyBoxSmall,
        styles.marginTop]}>
        <Text>{props.location}</Text>
      </View>
      <View style={[
        styles.spaceBetween,
        styles.marginTop
      ]}>
        <View style={[
        styles.flexStart,
          styles.emptyBoxBase,
          styles.emptyBoxSmall
        ]}>
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
          <Text style={styles.text}>Join</Text>
        </Pressable>
      </View>
    </View>
  )
};

const Category = (props) => {
  return (
    <View style={styles.category}>
      <Text>{props.text}</Text>
    </View>
  )
};

export default Activity;
