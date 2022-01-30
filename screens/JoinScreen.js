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
