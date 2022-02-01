import Activity from '../components/Activity';
import MapView from 'react-native-maps';
import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "react-query";

import BottomDrawer from '../components/BottomDrawer';
// import * as activityExample from '../examples/activityExample.json'
import styles from '../styles/stylesheet';
import { MapContext } from '../utils/globalState'
import {
  getActivities,
} from '../utils/activity';

const ActivityNearby = () => {
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
            <ActivityList />
          </ScrollView>
        </View>
      </BottomDrawer>
    </View>
  );
}

const ActivityList = () => {
  const { status, data, error, isFetching } = getActivities();

  return (
    <View>
      {status === "loading" ? (
        <Text>Loading</Text>
      ) : status === "error" ? (
        <Text>Error</Text>
      ) : (
        <View>
          {data.activities.map((element, index) => (
            /* logic so that we put marginTop except the first */
            (index == 0)
              ?
              <View key={index}>
                <Activity
                  name={element.name}
                  description={element.description}
                  capacity={element.capacity}
                  categories={element.categories}
                  participants={element.participants}
                  location={element.location}
                />
              </View>
              :
              <View
                key={index}
                style={styles.marginTop}
              >
                <Activity
                  name={element.name}
                  description={element.description}
                  capacity={element.capacity}
                  location={element.location}
                  categories={element.categories}
                />
              </View>
          ))}
          <View
            style={{
              height: 140,
            }}
          />
        </View>
      )}
    </View>
  )
}

export default ActivityNearby;
