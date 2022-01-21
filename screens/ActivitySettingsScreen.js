import React, { useState } from "react";
import {
  Text,
  View,
  Switch,
  TextInput,
  StyleSheet,
} from 'react-native';
import styles from '../styles/stylesheet';

const ActivitySettingsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.containerActivitySettings}>
      <Switch
        style={styles.suis}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.header}>Activity Settings</Text>
      <Text style={styles.dataActivitySettings}></Text>
      <TextInput secureTextEntry={false} multiline={true} style={styles.inputActivitySettings}
        underlineColorAndroid="transparent"
        placeholder="Preferred activity notification"
        placeholderTextColor="black"
        autoCapitalize="none"
        editable={false}
      />
      {
        isEnabled &&
        <TextInput secureTextEntry={false} multiline={true} style={styles.inputActivitySettings}
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

export default ActivitySettingsScreen;
