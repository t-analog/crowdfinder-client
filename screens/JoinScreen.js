import Activity from '../components/Activity';
import MapView from 'react-native-maps';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import BottomDrawer from '../components/BottomDrawer';
import * as activityExample from '../examples/activityExample.json'
import styles from '../styles/stylesheet';

const JoinScreen = ({ navigation }) => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 1.56139,
          longitude: 103.62924,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
      <BottomDrawer>
        <View style={styles.activityWrapper}>
          <Text style={styles.header}>Activity Nearby</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.items}
          >
            {activityExample.activities.map((element, index, array) => (
              /* logic so that we only place marginBottom except the last */
              (index + 1 !== array.length)
                ?
                <View key={index}>
                  <Activity
                    title={element.title}
                    description={element.description}
                    location={element.location}
                    categories={element.categories}
                  />
                  <View
                    style={{ marginBottom: 20 }}
                  />
                </View>
                :
                <Activity
                  key={index}
                  title={element.title}
                  description={element.description}
                  location={element.location}
                  categories={element.categories}
                />
            ))}
          </ScrollView>
        </View>
      </BottomDrawer>
    </View>
  );
}

export default JoinScreen;
