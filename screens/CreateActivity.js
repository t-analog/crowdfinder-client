import React from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView
} from 'react-native';
import MapView, {
  Marker,
} from 'react-native-maps';

import { createActivity } from '../utils/activity';
import styles from '../styles/stylesheet';
import BottomDrawer from '../components/BottomDrawer';
import { MapContext } from '../utils/globalState'

const CreateActivity = () => {
  const mapRef = React.useRef(null);
  const [mapState, setMapState] = React.useContext(MapContext);
  const [activityMarker, setActivityMarker] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  const [capacity, setCapacity] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [name, setName] = React.useState("");
  const { mutate, error } = createActivity();

  const clearText = () => {
    setName("");
    setDescription("");
    setCategories("");
    setCapacity("");
  };
  const createActivityTrigger = () => {
    if (name == "") {
      alert("Name cannot be empty!");
      return false;
    }
    else if (description == "") {
      alert("Description cannot be empty!");
      return false;
    }
    else if (categories == "") {
      alert("Please enter the category for this activity!");
      return false;
    }
    else if (capacity == "" || capacity <= 0) {
      alert("Please justify the valid capacity for this activity!");
      return false;
    }
    mutate({
      name,
      description,
      capacity,
      categories,
      location: {
        latitude: activityMarker.latitude,
        longitude: activityMarker.longitude
      },
    });
    alert("Activity Created");
    clearText();
    return true;
  };
  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={mapState}
        onRegionChangeComplete={setMapState}
        onPress={(e) => {
          /* console.log(`Map pressed! ${JSON.stringify(e.nativeEvent)}`); */
          /* console.log(`Value of activityMarker: ${JSON.stringify(activityMarker)}`); */
          /* console.log(`typeof activityMarker: ${typeof(activityMarker.latitude)}`); */
          setActivityMarker(e.nativeEvent.coordinate);
        }}
      >
        <Marker
          coordinate={activityMarker}
        />
      </MapView>
      <BottomDrawer
        mapRef={mapRef}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Create Activity</Text>
          <TextInput
            autoCapitalize="none"
            placeholder="Name"
            placeholderTextColor
            style={[
              styles.textInputBase,
              styles.textInputSmall
            ]}
            underlineColorAndroid="transparent"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Description"
            placeholderTextColor
            style={[
              styles.textInputBase,
              styles.textInputBig,
              styles.marginTop
            ]}
            underlineColorAndroid="transparent"
            onChangeText={setDescription}
            value={description}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Category"
            placeholderTextColor
            style={[
              styles.textInputBase,
              styles.textInputSmall,
              styles.marginTop
            ]}
            onChangeText={setCategories}
            underlineColorAndroid="transparent"
            value={categories}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Capacity"
            placeholderTextColor
            style={[
              styles.textInputBase,
              styles.textInputSmall,
              styles.marginTop
            ]}
            onChangeText={setCapacity}
            underlineColorAndroid="transparent"
            value={capacity}
          />
          <TextInput
            autoCapitalize="none"
            editable={false}
            placeholder="Location"
            placeholderTextColor
            style={[
              styles.textInputBase,
              styles.textInputSmall,
              styles.marginTop,
              {
                color: 'black',
              }]}
            underlineColorAndroid="transparent"
            value={`Lat: ${JSON.stringify(activityMarker.latitude)}, Long: ${JSON.stringify(activityMarker.longitude)}`}
          />
          <View style={[
            styles.spaceBetween,
            styles.marginTop
          ]}>
            <Pressable
              style={[
                styles.buttonBase,
                styles.buttonHalf
              ]}
              onPress={() => {
                clearText();
              }}
            >
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[
                styles.buttonBase,
                styles.buttonHalf
              ]}
              onPress={() => {
                createActivityTrigger();
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
