import 'core-js/stable';
import {
  Provider
} from 'react-native-paper';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import LoginStack from './components/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from './components/HomeTab';

const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <LoginStack />
          {/* <HomeTab/> */}
        </Provider>
      </QueryClientProvider>
    </NavigationContainer>
  )
};

export default App;
