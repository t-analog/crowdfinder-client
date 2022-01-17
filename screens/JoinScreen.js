import * as React from 'react';
import Activity from '../components/Activity';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as activityExample from '../examples/activityExample.json'
import { createActivity, getActivities } from '../utils/activity';

const JoinScreen = ({ navigation }) => {
  console.log(createActivity());
  console.log(getActivities());
  return (
    <View style={styles.activityWrapper}>
      <Text style={styles.sectionTitle}>Activity Nearby</Text>
      <ScrollView style={styles.items}>
        {activityExample.activities.map((activity, id) => (
          <Activity
            key={id}
            title={activity.title}
            description={activity.description}
            location={activity.location}
            categories={activity.categories}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  activityWrapper: {
    flex: 1,
    backgroundColor: '#EBEAED',
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: '33%',
    borderRadius: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  items: {
    marginTop: 20
  },
});

export default JoinScreen;
