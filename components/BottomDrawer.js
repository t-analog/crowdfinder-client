import React, { useRef, useState } from "react";
import {
  View,
  Easing,
  Animated,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native'

import styles from '../styles/stylesheet';
import { MapContext } from '../utils/globalState'

const { width, height } = Dimensions.get('window');

const drawer = {
  height: height * 3 / 4,
  state: {
    open: (height * 3 / 6),
    closed: 0
  },
}

const BottomDrawer = (props) => {
  const pan = useRef(new Animated.Value(drawer.state.closed)).current;
  const [drawerState, setDrawerState] = useState(drawer.state.closed);
  const [mapState, setMapState] = React.useContext(MapContext);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = () => {
        if (drawerState == drawer.state.open) {
          drawerAnimateMove(pan, drawer.state.closed);
          setDrawerState(drawer.state.closed);
        }
      }
      return unsubscribe;
    }, [drawerState])
  )


  const drawerAnimateMove = (value, toValue) => {
    Animated.timing(value, {
      toValue: -toValue,
      useNativeDriver: false,
      easing: Easing.out(Easing.exp)
    }).start();
  };

  const drawerNextState = () => {
    if (drawerState == drawer.state.closed) {
      drawerAnimateMove(pan, drawer.state.open);
      animateMapWithDrawer("open");
      setDrawerState(drawer.state.open);
    }
    else if (drawerState == drawer.state.open) {
      drawerAnimateMove(pan, drawer.state.closed);
      animateMapWithDrawer("closed");
      setDrawerState(drawer.state.closed);
    }
  };

  const animateMapWithDrawer = (state) => {
    props.mapRef.current.animateCamera({
      center: {
        latitude: state === "open"
          ?
          mapState.latitude - (mapState.latitudeDelta * 1 / 3)
          :
          mapState.latitude + (mapState.latitudeDelta * 1 / 3),
        longitude: mapState.longitude,
      }
    }, { duration: 1000 })
  }

  return (
    <View style={styles.drawerContainer}>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: -(drawer.height * 3 / 4),
          transform: [{ translateY: pan }]
        }}
      >
        <Pressable
          style={styles.drawerPressable}
          onPress={() => {
            drawerNextState();
          }}
        >
          {drawerState == drawer.state.closed
            ? <Ionicons
              name={"arrow-up"}
              color={"gray"}
              size={20}
            />
            : <Ionicons
              name={"arrow-down"}
              color={"gray"}
              size={20}
            />
          }
        </Pressable>
        <View style={styles.drawer}>
          {props.children}
        </View>
      </Animated.View>
    </View>
  );
};

export default BottomDrawer;
