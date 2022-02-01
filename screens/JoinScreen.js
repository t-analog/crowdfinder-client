import Activity from '../components/Activity';
import MapView from 'react-native-maps';
import React from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import BottomDrawer from '../components/BottomDrawer';
import * as activityExample from '../examples/activityExample.json'
import styles from '../styles/stylesheet';
import { MapContext } from '../utils/globalState'

const JoinScreen = () => {
  const navigation = useNavigation();
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('blur', () => console.log(`Activity Nearby unfocused`));
  //   return unsubscribe;
  // }, [navigation]);
  const [mapState, setMapState] = React.useContext(MapContext);
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={mapState}
        onRegionChangeComplete={setMapState}
      />
      <BottomDrawer>
        <View style={styles.container}>
          <Text style={styles.header}>Activity Nearby</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
          >
            {activityExample.activities.map((element, index) => (
              /* logic so that we only place marginTop except the first */
              (index == 0)
                ?
                <View key={index}>
                  <Activity
                    title={element.title}
                    description={element.description}
                    location={element.location}
                    categories={element.categories}
                  />
                </View>
                :
                <View
                  key={index}
                  style={styles.marginTop}
                >
                  <Activity
                    title={element.title}
                    description={element.description}
                    location={element.location}
                    categories={element.categories}
                  />
                </View>
            ))}
            <View
              style={{
                height: 80,
              }}
            />
          </ScrollView>
        </View>
      </BottomDrawer>
    </View>
  );
}

export default JoinScreen;
