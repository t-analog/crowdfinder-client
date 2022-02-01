import React from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
} from 'react-native';

import styles from '../styles/stylesheet';
import { JoinContext } from '../utils/globalState'

const Activity = (props) => {
  const [joined, setJoined] = React.useContext(JoinContext);
  // const submitActivity = () => {
  //   updateActivity(
  //     participants[{}]
  //   );
  //   return true;
  // };
  const JoinAlert = (props) => {
    Alert.alert(
      "Successfully Joined",
      "You have successfully participated.",
      [
        /* if comparing username, mutation paticipants
        { text: "OK", onPress: () => submitActivity() }
        */
        { text: "OK", onPress: () => setJoined(props) }
      ]
    );
  }
  const CancelAlert = () => {
    Alert.alert(
      "Confirmation",
      "Are You Sure?",
      [
        { text: "YES", onPress: () => setJoined("") },
        { text: "NO", onPress: () => {} }
      ]
    );
  }
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
        <Text>Lat: {props.location.latitude}, Long: {props.location.longitude}</Text>
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
        {
          joined == ""
            ?
          <Pressable
            style={[styles.buttonBase, styles.buttonHalf]}
            onPress={
              () => CancelAlert()
            }
          >
            <Text style={styles.text}>Cancel</Text>
          </Pressable>
          :
          <Pressable
            style={[styles.buttonBase, styles.buttonHalf]}
            onPress={
              () => JoinAlert(props.id)
            }
          >
            <Text style={styles.text}>Join</Text>
          </Pressable>
        }
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
