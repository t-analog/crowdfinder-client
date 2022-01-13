import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';

export default function Activity (props) {
    return (
        <View style={styles.item}>
            <View style={styles.textItems}>
                  <Text style={styles.itemTitle}>{props.title}</Text>
                  <Text style={styles.itemText}>{props.text}</Text>
                  <View style={{flexDirection: "row"}}>
                    <Square text={'text'}/>
                    <Square text={'longertext'}/>
                    <Square text={'evenlongertext'}/>
                  </View>
                  <Text style={styles.itemText}>{props.locate}</Text>
                  <View style={styles.itemBot}>
                    <TextInput style={styles.input}
                      underlineColorAndroid="transparent"
                      placeholder="0 / 3"
                      placeholderTextColor="black"
                      autoCapitalize="none" 
                    />
                    <Button style={styles.buttonItem}
                      title="    Join    "
                      onPress={() => alert('Joined!')}
                    />
                  </View>
            </View>
        </View>
    )
}

function Square (props) {
  return (
    <View style={styles.square}>
      <Text style={styles.textSquare}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    item: {
      backgroundColor: '#FFF',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: 20,
    },
    textItems: {
      width: '100%'
    },
    // itemLeft: {
    //   flexDirection: "row",
    //   alignItems:  'center',
    //   flexWrap: 'wrap',
    // },
    square: {
      minWidth: 40,
      textAlign: "center",
      height: 24,
      marginVertical: 5,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 20,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textItems: {
      maxWidth: '100%',
    },
    itemTitle: {
      flexWrap: "wrap",
      fontWeight: 'bold',
      marginVertical: 5,
      fontSize: 16
    },
    itemText: {
      flexWrap: "wrap",
      alignSelf: "stretch",
      marginVertical: 5,
    },
    // circular: {
    //   width: 12,
    //   height: 12,
    //   borderColor: '#55BCF6',
    //   borderWidth: 2,
    //   borderRadius: 5,
    // },
    textSquare: {
      paddingHorizontal: 15,
    },
    itemBot: {
      justifyContent: "space-between",
      flexDirection: "row"
    },
    buttonItem: {
      marginVertical: 5,
    }
});