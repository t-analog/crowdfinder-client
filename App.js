import 'core-js/stable';
import {
  Provider
} from 'react-native-paper';
import LoginStack from './components/LoginStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <LoginStack />
      </Provider>
    </NavigationContainer>
  )
};

export default App;
