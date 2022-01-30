import React, { useState } from "react";
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import {
  Text,
  View,
  Switch,
  TextInput,
  StyleSheet,
  Pressable
} from 'react-native';

const K_OPTIONS = [
  {
    item: 'Sports',
    id: 'SPO',
  },
  {
    item: 'Social',
    id: 'SOC',
  },
  {
    item: 'Charity',
    id: 'CHA',
  },

  {
    item: 'Education',
    id: 'EDU',
  },
]

// function ActivitySettingsScreen()
// {
  const ActivitySettingsScreen = ({ navigation }) => 
  {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selectedTeam, setSelectedTeam] = useState({});
    const [selectedTeams, setSelectedTeams] = useState([]);
    return (

      <View style={styles.container}>
        
        <Text style={styles.header}>Activity Settings</Text>
        <Text style={styles.data}></Text>
        <Text style={styles.data}></Text>
        <View style={styles.container2}>
          <TextInput secureTextEntry={false} multiline={true} style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Preferred activity notification"
            placeholderTextColor="black"
            autoCapitalize="none"
            editable={false}
          />
          <Switch
            style={styles.suis}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        
        {
          isEnabled &&
          <View style={styles.container3}>
            <TextInput secureTextEntry={false} multiline={true} style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Preferred activity"
              placeholderTextColor="black"
              autoCapitalize="none"
              editable={false}
            />

            <View style={styles.multiselect}/>
              <SelectBox
                style={styles.multiselect}
                arrowIconColor='#3F5EFB'
                searchIconColor='#3F5EFB'
                toggleIconColor='#3F5EFB'
                //labelStyle={backgroundColor='#3F5EFB'}
                selectedItemColor={backgroundColor='#3F5EFB'}
                label="Select multiple"
                options={K_OPTIONS}
                selectedValues={selectedTeams}
                onMultiSelect={onMultiChange()}
                onTapClose={onMultiChange()}
                isMulti
              />

              <Pressable
                style={styles.buttonConfirm}
                onPress={() => {
                  //submitActivity();
                }}
              >
              <Text style={styles.buttonText}>Save</Text>
              </Pressable>
          </View>
        }
        
      </View>
    )

    function onMultiChange() 
    {
      return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }

    function onChange() 
    {
      return (val) => setSelectedTeam(val)
    }
  }
//}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: 'white',
    display: 'flex'
  },
  container2: {
    flexDirection: 'row', 
    borderColor: 'black',
    borderWidth: 1, 
    margin: (15, 15, 15, 0 ), 
    justifyContent: 'space-between'
  },
  header: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 40
  },
  data: {
    marginLeft: 15,
    fontSize: 15
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 60
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suis: {
    marginRight: 30
  },
  multiselect: {
    marginTop: -50, 
    marginLeft:30, 
    height: 40
  },
  buttonConfirm: {
    backgroundColor: 'black',
    //padding: 10,
    //paddingRight: 56,
    //paddingLeft: 56,
    marginTop: 20,
    height: 40,
    width: 100,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F5EFB',
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10,
    textAlign: 'center'
  },
  buttonText: {
    color: 'white',
    
  }
});

export default ActivitySettingsScreen;
