import 'core-js/stable';
import {
  Provider
} from 'react-native-paper';
import LoginStack from './components/LoginStack';

const App = () => {
  return (
    <Provider>
      <LoginStack />
    </Provider>
  )
};

export default App;
