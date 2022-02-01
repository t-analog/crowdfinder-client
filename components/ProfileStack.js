import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import SupportUs from '../screens/SupportUs';
import ActivitySettings from '../screens/ActivitySettings';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile Screen"
        component={Profile}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name="Activity Settings"
        component={ActivitySettings}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name="Support Us"
        component={SupportUs}
        options={{
          header: () => null
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
