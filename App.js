import 'core-js/stable';
import React from 'react';
import {
  Provider
} from 'react-native-paper';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { NavigationContainer } from '@react-navigation/native';

// import HomeTab from './components/HomeTab';
import LoginStack from './components/LoginStack';
import {
  MapContext,
} from './utils/globalState'

const queryClient = new QueryClient();

const App = () => {
  const [mapState, setMapState] = React.useState({
    latitude: 1.56139,
    longitude: 103.62924,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <MapContext.Provider value={[mapState, setMapState]}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Provider>
            <LoginStack />
            {/* <HomeTab/> */}
          </Provider>
        </NavigationContainer>
      </QueryClientProvider>
    </MapContext.Provider>
  )
};

export default App;
