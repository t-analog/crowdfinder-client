import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const CreateActivityScreen = () => {
  const [shouldShow, setshouldShow] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {
          shouldShow ? (
            <View>
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Event's Name"
                placeholderTextColor="black"
                autoCapitalize="none" />
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Description"
                placeholderTextColor="black"
                autoCapitalize="none" />
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Capacity"
                placeholderTextColor="black"
                autoCapitalize="none" />
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Category"
                placeholderTextColor="black"
                autoCapitalize="none" />
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Location"
                placeholderTextColor
                autoCapitalize="none" />
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.buttonCancel}
                  onPress={() => setshouldShow(!shouldShow)}>
                  <Text style={styles.ButtonText}> Cancel </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonCreate} >
                  <Text style={styles.ButtonText}> Create </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null
        }
        <TouchableOpacity
          style={styles.buttonActivity}
          onPress={() => setshouldShow(!shouldShow)}>
          <Text style={styles.ButtonText}> Create Activity </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: 'white'
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
    borderWidth: 1
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
     paddingRight: 63,
     paddingLeft: 63,
     margin: 15,
     height: 40,
     alignItems: 'flex-start',
     justifyContent: 'center',
  },
  buttonCreate: {
     backgroundColor: 'black',
     padding: 10,
     paddingRight: 63,
     paddingLeft: 63,
     margin: 15,
     height: 40,
     alignItems: 'flex-end',
     justifyContent: 'center',
  },
  ButtonText: {
    color: 'white'
  }
});

export default CreateActivityScreen;
