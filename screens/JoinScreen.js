import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// You can import from local files
import Activity from '../components/Activity';

export default function JoinScreen(navigation) {
  return (
    <View style={styles.activityWrapper}>
      <Text style={styles.sectionTitle}>Activity Nearby</Text>

      <ScrollView style={styles.items}>
        {/* This is where the activities will go! */}
        <Activity 
          title={'House Moving'} 
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat ultrices blandit.'}
          locate={'Jalan Resak, Skudai'}
        />
                
        <Activity 
          title={'Badminton'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat ultrices blandit.'}
        />

        <Activity 
          title={'Resque'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat ultrices blandit.'}
        />
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
        marginTop: '30%',
        borderRadius: 20,
        paddingBottom: 40,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 10,
    },

    items: {
        marginTop: 25,
    },
});
