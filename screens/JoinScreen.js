import * as React from 'react';
import Activity from '../components/Activity';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import * as activityExample from '../examples/activityExample.json'
import BottomDrawer from 'react-native-bottom-drawer-view';


const windowHeight = 4 / 5 * Dimensions.get('window');
var isHidden = true;

const JoinScreen = ({ navigation }) => {
  return (
    <BottomDrawer
      containerHeight={600}
      offset={10}
      downDisplay={415}
      roundedEdges={true}
    >
        <View style={styles.activityWrapper}>

        <View style={{
            width: 40,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            alignSelf: 'center',
          }}  
        />
        <Text style={styles.sectionTitle}>
          Activity Nearby
        </Text>
        
        <ScrollView style={styles.items}>
          
          <TouchableOpacity>
            {activityExample.activities.map((activity, id) => (
                        <Activity
                          key={id}
                          title={activity.title}
                          description={activity.description}
                          location={activity.location}
                          categories={activity.categories}
                        />
            ))}
          </TouchableOpacity>
        </ScrollView>
      </View>
      
    </BottomDrawer>
  );
}

const styles = StyleSheet.create({
  activityWrapper: {
    flex: 1,
    backgroundColor: '#EBEAED',
    paddingTop: 10,
    paddingHorizontal: 20,
    // marginTop: '33%',
    borderRadius: 20,
    paddingBottom: 40,
    bottom: 0,
    marginBottom: 120
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  items: {
    marginTop: 20,
  },
});

export default JoinScreen;
