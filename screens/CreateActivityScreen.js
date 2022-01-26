import React from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';
import { createActivity } from '../utils/activity';
import styles from '../styles/stylesheet';

const CreateActivityScreen = () => {
  const [capacity, onChangeCapacity] = React.useState("");
  const [categories, onChangeCategories] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [location, onChangeLocation] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [shouldShow, setshouldShow] = React.useState(true);
  const togglePanel = () => setshouldShow(!shouldShow);

  const clearText = () => {
    onChangeCapacity("");
    onChangeCategories("");
    onChangeDescription("");
    onChangeLocation("");
    onChangeName("");
  };
  const submitActivity = async () => {
    if (name == "") {
      console.error("Name cannot be empty!");
      return false;
    } else {
      createActivity(
        name,
        description,
        Number(capacity),
        categories.split(' '),
        { latitude: 1.2, longitude: 3.4 }
      );
      alert("Activity Created")
      return true;
    };
  };
  return (
    <View style={styles.container}>
      {
        shouldShow ? (
          <View>
            <Text style={styles.header}>Create Activity</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="Name"
              placeholderTextColor
              style={styles.boxA}
              underlineColorAndroid="transparent"
              onChangeText={onChangeName}
              value={name}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Description"
              placeholderTextColor
              style={styles.inputDesc}
              underlineColorAndroid="transparent"
              onChangeText={onChangeDescription}
              value={description}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Category"
              placeholderTextColor
              style={styles.boxA}
              onChangeText={onChangeCategories}
              underlineColorAndroid="transparent"
              value={categories}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Capacity"
              placeholderTextColor
              style={styles.boxA}
              onChangeText={onChangeCapacity}
              underlineColorAndroid="transparent"
              value={capacity}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Location"
              placeholderTextColor
              style={styles.boxA}
              onChangeText={onChangeLocation}
              underlineColorAndroid="transparent"
              value={location}
            />
            <View style={styles.row}>
              <Pressable
                style={styles.buttonSplit}
                onPress={() => {
                  clearText(), togglePanel();
                }}
              >
                <Text style={styles.text}>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.buttonSplit}
                onPress={() => {
                  submitActivity();
                }}
              >
                <Text style={styles.text}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        ) :
        <Pressable
          style={styles.button}
          onPress={() => {
            togglePanel();
          }}
        >
          <Text style={styles.buttonText}>Create Activity</Text>
        </Pressable>
      }

    </View>
  );
};

export default CreateActivityScreen;
