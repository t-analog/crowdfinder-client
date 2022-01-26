import Activity from '../components/Activity';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import BottomDrawer from '../components/BottomDrawer';
import * as activityExample from '../examples/activityExample.json'

const JoinScreen = ({ navigation }) => {
  return (
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
});

export default JoinScreen;
