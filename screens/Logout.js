import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { logout } from '../utils/user';

const Logout = ({ navigation }) => {
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
	</View>
);
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
});
