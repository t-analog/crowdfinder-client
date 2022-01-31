import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import SupportUsScreen from '../screens/SupportUsScreen';
import ActivitySettingsScreen from '../screens/ActivitySettingsScreen';
import ProfilePicture from './ProfilePicture';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name="Activity Settings"
        component={ActivitySettingsScreen}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name="Support Us"
        component={SupportUsScreen}
        options={{
          header: () => null
        }}
      />
        <Stack.Screen
          name="ProfilePicture"
          component={ProfilePicture}
          options={{
            header: () => null
          }}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
