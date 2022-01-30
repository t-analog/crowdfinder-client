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

import styles from '../styles/stylesheet';

const { width, height } = Dimensions.get('window');

const drawer = {
  height: height * 3 / 4,
  state: {
    open: (height * 3 / 6),
    closed: 0
  },
}


const BottomDrawer = ({ children }) => {
  const pan = useRef(new Animated.Value(drawer.state.closed)).current;
  const [drawerState, setDrawerState] = useState(drawer.state.closed);


  const drawerAnimateMove = (value, toValue) => {
    Animated.timing(value, {
      toValue: -toValue,
      useNativeDriver: false,
      easing: Easing.out(Easing.exp)
    }).start();
  };

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
            if (drawerState == drawer.state.closed) {
              drawerAnimateMove(pan, drawer.state.open);
              setDrawerState(drawer.state.open);
            }
            else if (drawerState == drawer.state.open) {
              drawerAnimateMove(pan, drawer.state.closed);
              setDrawerState(drawer.state.closed);
            }
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
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default BottomDrawer;
