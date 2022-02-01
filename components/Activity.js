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
        <Text>{props.name}</Text>
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
      ]}>
        {props.categories.map((element, index) => (
          (index == 0)
            ?
            <View key={index}>
              <Category text={element} />
            </View>
            :
            <View
              key={index}
              style={{ marginLeft: 5 }}
            >
              <Category text={element} />
            </View>
        ))}
        {/* <Text> */}
        {/*   {typeof (props.categories)} {props.categories.length} */}
        {/* </Text> */}
      </View>
      <View style={[
        styles.flexStart,
        styles.emptyBoxBase,
        styles.emptyBoxSmall,
        styles.marginTop
      ]}>
        <Text>Lat: {props.location.latitude} Long: {props.location.longitude}</Text>
      </View>
      <View style={[
        styles.spaceBetween,
        styles.marginTop
      ]}>
        <View style={[
          styles.spaceBetween,
          styles.emptyBoxBase,
          styles.emptyBoxSmall
        ]}>
          <Text>{typeof (props.participants) === "undefined" ? 0 : props.participants.length} of {props.capacity} joined</Text>
        </View>
        <Pressable
          style={[
            styles.buttonBase,
            /* styles.buttonHalf, */
          ]}
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
