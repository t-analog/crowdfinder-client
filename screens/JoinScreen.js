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

const JoinScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
          <Text style={styles.sectionTitle}>Activity Nearby</Text>
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

const styles = StyleSheet.create({
  activityWrapper: {
    flex: 1,
    backgroundColor: "aliceblue",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    fontSize: 20,
    elevation: 1,
  },
});

export default JoinScreen;
