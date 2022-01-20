import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Activity from '../components/Activity';
import BottomDrawer from '../components/BottomDrawer';
import * as activityExample from '../examples/activityExample.json'

const JoinScreen = ({ navigation }) => {
  return (
    <View>
      {/* <Text>Lol</Text> */}
      <BottomDrawer>
        {activityExample.activities.map((activity, id) => (
          <Activity
            key={id}
            title={activity.title}
            description={activity.description}
            location={activity.location}
            categories={activity.categories}
          />
        ))}
      </BottomDrawer>
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
    marginHorizontal: 10
  },
});

export default JoinScreen;
