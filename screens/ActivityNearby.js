import Activity from '../components/Activity';
import MapView, {
   Marker 
} from 'react-native-maps';
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
import Geolocation from '@react-native-community/geolocation';
import data from '../examples/activityExample.json';
import activityExample from '../examples/activityExample.json'


const ActivityNearby = () => {
  const [mapState, setMapState] = React.useContext(MapContext);
  const { data } = getActivities();
  Geolocation.getCurrentPosition(
    position => {},  
    error => {},
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 3000 }
  );
  const Markers = (lat, lon, index, name, desc) => {
    return <Marker
      key={index}
      coordinate={
        {latitude: lat, longitude: lon}
      }
      title={name}
      description={desc}
      />
  };
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={mapState}
        onRegionChangeComplete={setMapState}
        showsUserLocation
      >
        {activityExample.activities.map((element, index) => (
          Markers(
            element.location.latitude, 
            element.location.longitude, 
            index, element.name, 
            element.description
          )
        ))}
      </MapView>
      <BottomDrawer>
        <View style={styles.container}>
          <Text style={styles.header}>Activity Nearby</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
          >
            <ActivityList />
            <View
              style={{
                height: 140,
              }}
            />
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
          {activityExample.activities.map((element, index) => (
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
                style={[
                  /* styles.marginTop, */
                  {
                    marginTop: 40,
                  }
                ]}
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
        </View>
      )}
    </View>
  )
}

export default ActivityNearby;
