import { createStackNavigator } from '@react-navigation/stack';

import HomeTab from './HomeTab';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Home"
        component={HomeTab}
        options={{
          header: () => null
        }}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
