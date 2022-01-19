import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import SupportUsScreen from '../screens/SupportUsScreen';
import ActivitySettingsScreen from '../screens/ActivitySettingsScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name="Activity Settings"
        component={ActivitySettingsScreen}
      />
      <Stack.Screen
        name="Support Us"
        component={SupportUsScreen}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
