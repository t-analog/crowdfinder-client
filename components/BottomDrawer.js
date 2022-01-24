import React, { useRef, useState } from "react";
import {
  Text,
  View,
  Easing,
  Animated,
  StyleSheet,
  Dimensions,
  PanResponder,
  Pressable,
} from "react-native";

const { width, height } = Dimensions.get('window');
const drawer = {
  height: height * 3 / 4,
  state: {
    open: 0,
    closed: (height * 3 / 4) / 2
  },
}


const BottomDrawer = ({ children }) => {
  const pan = useRef(new Animated.Value(drawer.state.open)).current;
  const [drawerState, setDrawerState] = useState(drawer.state.open);


  const drawerAnimateMove = (value, toValue) => {
    Animated.timing(value, {
      toValue: toValue,
      useNativeDriver: false,
      easing: Easing.out(Easing.exp)
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: 'absolute',
          /* bottom: -(drawer.height / 2), */
          bottom: 0,
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
            console.log(drawerState);
          }}
        />
        <View style={styles.drawer}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
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
