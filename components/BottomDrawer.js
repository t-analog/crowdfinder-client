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

const { width, height } = Dimensions.get('window');

const drawer = {
  height: height * 3 / 4,
  state: {
    open: (height * 3 / 4) / 2,
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
    <View style={styles.container}>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: -(drawer.height / 2),
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
              color={"white"}
              size={20}
            />
            : <Ionicons
              name={"arrow-down"}
              color={"white"}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  drawer: {
    backgroundColor: "#666",
    borderColor: "black",
    borderWidth: 1,
    height: drawer.height,
    width,
  },
  drawerPressable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderColor: "black",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    height: 40,
    width,
  }
});

export default BottomDrawer;
