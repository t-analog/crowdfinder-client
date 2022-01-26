import React, { useState } from "react";
import {
  Text,
  View,
  Switch,
  TextInput,
} from 'react-native';

import styles from '../styles/stylesheet';

const ActivitySettingsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity Settings</Text>
      <View>
        <View
          style={[styles.emptyBoxBase, styles.emptyBoxSmall]}
        >
          <Text>
            Preferred activity notification
          </Text>
        </View>
        <Switch
          style={styles.toggleSwitch}
          trackColor={{ false: "gray", true: "black" }}
          thumbColor={isEnabled ? "white" : "white"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {
        isEnabled &&
        <TextInput
          secureTextEntry={false}
          multiline={true}
          underlineColorAndroid="transparent"
          placeholder="Preferred activity"
          placeholderTextColor="black"
          autoCapitalize="none"
          style={[styles.textInputBase, styles.textInputMedium, styles.marginTop]}
        />
      }
    </View>
  );
};

export default ActivitySettingsScreen;
