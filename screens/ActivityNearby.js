import Activity from '../components/Activity';
import MapView, {
  Marker,
} from 'react-native-maps';
import React from 'react';
import {
  Text,
  View,
  Pressable,
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

  const { status, data, error, isFetching } = getActivities();

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={mapState}
        onRegionChangeComplete={setMapState}
      >
        {status === "success"
          ?
          (
            data.activities.map((element, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: element.location.latitude,
                  longitude: element.location.longitude,
                }}
              />
            ))
          )
          : null
        }
      </MapView>
      <BottomDrawer>
        <View style={styles.container}>
          <Text style={styles.header}>Activity Nearby</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View>
              {status === "loading" ? (
                <Text>Loading</Text>
              ) : status === "error" ? (
                <Text>Error</Text>
              ) : status === "success" ? (
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
                          categories={element.categories}
                          participants={element.participants}
                          location={element.location}
                        />
                      </View>
                  ))}
                </View>
              )
                : null
              }
            </View>
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

export default ActivityNearby;
