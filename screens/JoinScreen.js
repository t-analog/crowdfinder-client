import Activity from '../components/Activity';
import MapView, {Marker} from 'react-native-maps';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import BottomDrawer from '../components/BottomDrawer';
import * as activityExample from '../examples/activityExample.json';
import { useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

const JoinScreen = ({ navigation }) => {
  const [ region, setRegion ] = useState({
    region: {
      latitude: 1.56139,
      longitude: 103.62924,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }
  });

  Geolocation.getCurrentPosition(position => {
    // console.log(position);
    setRegion({
      region: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    })
  },  error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 3000 }
  );
  
  const Markers = () => {
    return activityExample.activities.map((element, index) => (
          <Marker
            key={index}
            coordinate={{latitude: element.latitude,
                          longitude: element.longitude}}
            title={element.title} />
    ))
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion = {region.region}
        onRegionChange={region => {
          // console.log('Region changed');
          // setRegion({region});
        }}
        onRegionChangeComplete={region => {
          console.log('Region change complete');
          setRegion({region});
        }}
        showsUserLocation={true}
      >
        {/* want to apply in create activity screen */}
        <Marker
          coordinate={region.region}
          title={"initial"}
          description={'description'} />

        {Markers()}
      </MapView>

      {/* <Button onPress={() => componentDidMount()} title="Enable Permission" /> */}
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
                    categories={element.categories} />
                  <View
                    style={{ marginBottom: 20 }} />
                </View>
                :
                <Activity
                  key={index}
                  title={element.title}
                  description={element.description}
                  location={element.location}
                  categories={element.categories} />
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
    bottom: 300,
  },
  text: {
    fontSize: 20,
    elevation: 1,
  },
});

export default JoinScreen;
