import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { logout } from '../utils/user';
import { createActivity, getActivities } from '../utils/activity';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="Logout"
        onPress={
          async () => {
            if (await logout()) navigation.navigate("Login");
          }
        }
      />
      <Button
        title="GetActivities"
        onPress={
          async () => {
            console.log(await getActivities())
          }
        }
      />
      <Button
        title="CreateActivity"
        onPress={
          async () => {
            console.log(await createActivity())
          }
        }
      />
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
});
