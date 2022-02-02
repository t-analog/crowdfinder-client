import React from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';

import styles from '../styles/stylesheet';
import { app } from '../utils/realm';
import { MapContext } from '../utils/globalState'

const Activity = (props) => {
  const [mapState, setMapState] = React.useContext(MapContext);
  const creatorOrJoinedCheck = () => (
    props.creator === app.currentUser.id || props.participants.includes(app.currentUser.id)
      ? true
      : false
  )

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
      </View>
      <View style={[
        styles.flexStart,
        styles.emptyBoxBase,
        styles.emptyBoxSmall,
        styles.marginTop
      ]}>
        <Pressable
          onPress={() => {
            /* console.log(`${JSON.stringify(mapState)}`); */
            props.mapRef.current.animateCamera({
              center: {
                latitude: props.location.latitude - 0.008,
                longitude: props.location.longitude,
              }
            }, { duration: 1000 })
          }}
        >
          <Text>Lat: {props.location.latitude}, Long: {props.location.longitude}</Text>
        </Pressable>
      </View>
      <View style={[
        styles.flexStart,
        styles.emptyBoxBase,
        styles.emptyBoxSmall,
        styles.marginTop
      ]}>
        <Text>
          {
            props.creator === app.currentUser.id
              ?
              "You are the creator of this activity!"
              :
              props.creator
          }
        </Text>
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
          <Text>{props.participants.length} of {props.capacity} joined</Text>
        </View>
        <Pressable
          style={[
            styles.buttonBase,
            /* styles.buttonHalf, */
            creatorOrJoinedCheck()
              ? { backgroundColor: 'lightgray' }
              : null
          ]}
          onPress={
            () => {
              {
                creatorOrJoinedCheck()
                  ?
                  alert("You already joined this activity!")
                  :
                  alert("Activity joined!")
              }
            }
          }
        >
          <Text style={styles.text}>
            {
              creatorOrJoinedCheck()
                ?
                "Already Joined"
                :
                "Join"
            }
          </Text>
        </Pressable>
      </View>
    </View >
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
