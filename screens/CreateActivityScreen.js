import React from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CreateActivityScreen = () => {
  const [capacity, onChangeCapacity] = React.useState("");
  const [cat, onChangeCat] = React.useState("");
  const [desc, onChangeDesc] = React.useState("");
  const [loc, onChangeLoc] = React.useState("");
  const [title, onChangeTitle] = React.useState("");
  const [shouldShow, setshouldShow] = React.useState(true);
  const submitActivity = async () => {
    if (title == "") {
      console.error("Title cannot be empty!");
      return false;
    } else {
      alert("Activity Created")
      return true;
    };
  };
  const clearText = () => {
    onChangeCapacity("");
    onChangeCat("");
    onChangeDesc("");
    onChangeLoc("");
    onChangeTitle("");
  };
  return (
    <View style={styles.container}>
      {
        shouldShow ? (
          <View>
            <TextInput
              autoCapitalize="none"
              placeholder="Title"
              placeholderTextColor
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={onChangeTitle}
              value={title}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Description"
              placeholderTextColor
              style={styles.inputdesc}
              underlineColorAndroid="transparent"
              onChangeText={onChangeDesc}
              value={desc}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Category"
              placeholderTextColor
              style={styles.input}
              onChangeText={onChangeCat}
              underlineColorAndroid="transparent"
              value={cat}
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
              onChangeText={onChangeLoc}
              underlineColorAndroid="transparent"
              value={loc}
            />
          </View>
        ) : null
      }
      <View style={styles.row}>
        <Pressable
          style={styles.buttonCancel}
        >
          <Text style={styles.ButtonText}>Cancel</Text>
        </Pressable>
        <Pressable
          style={styles.buttonConfirm}
        >
          <Text style={styles.ButtonText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingVertical: 100,
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
