import React, { useState } from "react";
import {
  Text,
  View,
  Switch,
  TextInput,
  StyleSheet,
} from 'react-native';

const ActivitySettingsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Switch
        style={styles.suis}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.header}>Activity Settings</Text>
      <Text style={styles.data}></Text>
      <TextInput secureTextEntry={false} multiline={true} style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Preferred activity notification"
        placeholderTextColor="black"
        autoCapitalize="none"
        editable={false}
      />
      {
        isEnabled &&
        <TextInput secureTextEntry={false} multiline={true} style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Preferred activity"
          placeholderTextColor="black"
          autoCapitalize="none"
          editable={false}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: 'white',
    display: 'flex'
  },
  header: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 40
  },
  data: {
    marginLeft: 15,
    fontSize: 15
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 30,
    marginBottom: 365,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suis: {
    display: 'flex',
    position: 'relative',
    top: 100,
    right: 20
  }

});

export default ActivitySettingsScreen;
