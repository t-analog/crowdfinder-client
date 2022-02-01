import React from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "react-query";

import { createActivity } from '../utils/activity';
import styles from '../styles/stylesheet';
import BottomDrawer from '../components/BottomDrawer';
import { MapContext } from '../utils/globalState'

const CreateActivity = () => {
  const [mapState, setMapState] = React.useContext(MapContext);

  const [capacity, setCapacity] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [name, setName] = React.useState("");
  const { mutate, error } = createActivity();

  const clearText = () => {
    setCapacity("");
    setCategories("");
    setDescription("");
    setLocation("");
    setName("");
  };
  const submitActivity = () => {
    if (name == "") {
      console.error("Name cannot be empty!");
      return false;
    }
    mutate({
      name,
      description,
      capacity,
      categories,
      location,
    });
    alert("Activity Created");
    clearText();
    return true;
  };
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={mapState}
        onRegionChangeComplete={setMapState}
      />
      <BottomDrawer>
        <View style={styles.container}>
          <Text style={styles.header}>Create Activity</Text>
          <TextInput
            autoCapitalize="none"
            placeholder="Name"
            placeholderTextColor
            style={[styles.textInputBase, styles.textInputSmall]}
            underlineColorAndroid="transparent"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Description"
            placeholderTextColor
            style={[styles.textInputBase, styles.textInputBig, styles.marginTop]}
            underlineColorAndroid="transparent"
            onChangeText={setDescription}
            value={description}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Category"
            placeholderTextColor
            style={[styles.textInputBase, styles.textInputSmall, styles.marginTop]}
            onChangeText={setCategories}
            underlineColorAndroid="transparent"
            value={categories}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Capacity"
            placeholderTextColor
            style={[styles.textInputBase, styles.textInputSmall, styles.marginTop]}
            onChangeText={setCapacity}
            underlineColorAndroid="transparent"
            value={capacity}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Location"
            placeholderTextColor
            style={[styles.textInputBase, styles.textInputSmall, styles.marginTop]}
            onChangeText={setLocation}
            underlineColorAndroid="transparent"
            value={location}
          />
          <View style={[styles.spaceBetween, styles.marginTop]}>
            <Pressable
              style={[styles.buttonBase, styles.buttonHalf]}
              onPress={() => {
                clearText();
              }}
            >
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonBase, styles.buttonHalf]}
              onPress={() => {
                submitActivity();
              }}
            >
              <Text style={styles.text}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </BottomDrawer>
    </View>
  );
};

export default CreateActivity;