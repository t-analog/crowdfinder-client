import React from 'react';
import {
  View,
  Text,
  Alert,
  Pressable,
} from 'react-native';

import styles from '../styles/stylesheet';
import { app } from '../utils/realm';
import { MapContext } from '../utils/globalState'
import {
  deleteActivity,
  updateActivityParticipant,
} from '../utils/activity';

const Activity = (props) => {
  const [mapState, setMapState] = React.useContext(MapContext);
  const { mutate: deleteActivityMutate, error: deleteActivityError } = deleteActivity();
  const { mutate: updateActivityParticipantMutate, error: updateActivityParticipantError } = updateActivityParticipant();
  const creatorCheck = () => (
    props.creator === app.currentUser.id
      ? true
      : false
  );
  const joinedCheck = () => (
    props.participants.includes(app.currentUser.id)
      ? true
      : false
  );

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
            props.mapRef.current.animateCamera({
              center: {
                latitude: props.location.latitude - (mapState.latitudeDelta * 1 / 3),
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
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {
            props.creator === app.currentUser.id ?
              <Pressable
                style={[
                  styles.buttonBase,
                  /* styles.buttonHalf, */
                ]}
                onPress={
                  () => {
                    Alert.alert(
                      "Deleting Activity..",
                      "Do you want to delete this activity?",
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                            deleteActivityMutate({ id: props._id });
                          }
                        },
                        {
                          text: "No",
                        },
                      ]
                    );
                  }
                }
              >
                <Text style={styles.text}>Delete</Text>
              </Pressable>
              : null
          }
          <Pressable
            style={[
              styles.buttonBase,
              /* styles.buttonHalf, */
              creatorCheck() || joinedCheck()
                ? { backgroundColor: 'lightgray' }
                : null,
              {
                marginLeft: 20,
              },
            ]}
            onPress={
              () => {
                if (creatorCheck()) {
                  alert("You already joined your own activity!");
                } else if (joinedCheck()) {
                  Alert.alert(
                    "Leaving Activity..",
                    "Do you want to leave this activity?",
                    [
                      {
                        text: "Yes",
                        onPress: () => {
                          updateActivityParticipantMutate({
                            action: "leave",
                            id: props._id,
                            participants: props.participants,
                          });
                        }
                      },
                      {
                        text: "No",
                      },
                    ]
                  );
                } else {
                  Alert.alert(
                    "Joining Activity..",
                    "Do you want to join this activity?",
                    [
                      {
                        text: "Yes",
                        onPress: () => {
                          updateActivityParticipantMutate({
                            action: "join",
                            id: props._id,
                            participants: props.participants,
                          });
                        }
                      },
                      {
                        text: "No",
                      },
                    ]
                  );
                }
              }
            }
          >
            <Text style={styles.text}>
              {
                creatorCheck() || joinedCheck()
                  ?
                  "Already Joined"
                  :
                  "Join"
              }
            </Text>
          </Pressable>
        </View>
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
