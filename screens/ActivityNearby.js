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
import { JoinContext, MapContext } from '../utils/globalState'
import {
  getActivities,
} from '../utils/activity';
import activityExample from '../examples/activityExample.json'

const ActivityNearby = () => {
  const [joined, setJoined] = React.useState("");
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
            {
              (joined == "")
                ?
              <JoinContext.Provider value={[joined, setJoined]}>
                <ActivityList />
              </JoinContext.Provider>
              :
              <JoinContext.Provider value={[joined, setJoined]}>
                <Joining />
              </JoinContext.Provider>
              
            }
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
  const [joined, setJoined] = React.useState(JoinContext);

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
                <JoinContext.Provider value={[joined, setJoined]}>
                  <Activity
                    id={element.id}
                    name={element.name}
                    description={element.description}
                    capacity={element.capacity}
                    categories={element.categories}
                    participants={element.participants}
                    location={element.location}
                  />
                </JoinContext.Provider>
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
                <JoinContext.Provider value={[joined, setJoined]}>
                  <Activity
                    id={element.id}
                    name={element.name}
                    description={element.description}
                    capacity={element.capacity}
                    location={element.location}
                    categories={element.categories}
                  />
                </JoinContext.Provider>
                <Text>Hello</Text>
              </View>
          ))}
        </View>
      )}
    </View>
  )
}

const Joining = () => {
  const { status, data, error, isFetching } = getActivities();
  const [joined, setJoined] = React.useState(JoinContext);

  return (
    <View>
      {status === "loading" ? (
        <Text>Loading</Text>
      ) : status === "error" ? (
        <Text>Error</Text>
      ) : (
        <View>
          {activityExample.activities.map((element) => (
            /* logic so that we put marginTop except the first */
            (element.id == joined)
              ?
              <View>
                <JoinContext.Provider value={[joined, setJoined]}>
                  <Activity
                    name={element.name}
                    description={element.description}
                    capacity={element.capacity}
                    categories={element.categories}
                    participants={element.participants}
                    location={element.location}
                  />
                </JoinContext.Provider>
              </View>
              :
              null
          ))}
        </View>
      )}
    </View>
  )
}

export default ActivityNearby;

