import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { logout } from '../utils/user';
import { getActivities } from '../utils/activity';
import {
  gql,
  useQuery,
  useMutation,
} from "@apollo/client";

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
        onPress={getActivities}
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
