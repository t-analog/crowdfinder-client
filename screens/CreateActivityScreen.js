import React from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';

import { createActivity } from '../utils/activity';
import BottomDrawer from '../components/BottomDrawer';

const CreateActivityScreen = () => {
  const [capacity, onChangeCapacity] = React.useState("");
  const [categories, onChangeCategories] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [location, onChangeLocation] = React.useState("");
  const [name, onChangeName] = React.useState("");

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
    <BottomDrawer>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Activity Nearby</Text>
        <View>
          <TextInput
            autoCapitalize="none"
            placeholder="Name"
            placeholderTextColor
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={onChangeName}
            value={name}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Description"
            placeholderTextColor
            style={styles.inputdesc}
            underlineColorAndroid="transparent"
            onChangeText={onChangeDescription}
            value={description}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Category"
            placeholderTextColor
            style={styles.input}
            onChangeText={onChangeCategories}
            underlineColorAndroid="transparent"
            value={categories}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Capacity"
            placeholderTextColor
            style={styles.input}
            onChangeText={onChangeCapacity}
            underlineColorAndroid="transparent"
            value={capacity}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Location"
            placeholderTextColor
            style={styles.input}
            onChangeText={onChangeLocation}
            underlineColorAndroid="transparent"
            value={location}
          />
        </View>
        <View style={styles.row}>
          <Pressable
            style={styles.buttonCancel}
            onPress={() => {
              clearText();
            }}
          >
            <Text style={styles.ButtonText}>Cancel</Text>
          </Pressable>
          <Pressable
            style={styles.buttonConfirm}
            onPress={() => {
              submitActivity();
            }}
          >
            <Text style={styles.ButtonText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </BottomDrawer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "aliceblue",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logo: {
    aspectRatio: 1.81,
    width: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    resizeMode: 'contain'
  },
  input: {
    paddingHorizontal: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    height: 40,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  inputdesc: {
    paddingHorizontal: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    height: 150,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  buttonActivity: {
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancel: {
    backgroundColor: 'black',
    padding: 10,
    paddingRight: 56,
    paddingLeft: 56,
    margin: 15,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#3F5EFB',
    borderRadius: 10,
    textAlign: 'center',
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonConfirm: {
    backgroundColor: 'black',
    padding: 10,
    paddingRight: 56,
    paddingLeft: 56,
    margin: 15,
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#3F5EFB',
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10,
    textAlign: 'center'
  },
  ButtonText: {
    color: 'white'
  }
});

export default CreateActivityScreen;
