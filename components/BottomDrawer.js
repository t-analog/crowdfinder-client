import React, { useRef, useState } from "react";
import {
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  PanResponder,
  Easing,
} from "react-native";

const { width, height } = Dimensions.get('window');

const DrawerState = {
  Open: (height / 2) - 20,
  Closed: 0
};

const BottomDrawer = () => {
  const pan = useRef(new Animated.Value(DrawerState.Closed)).current;
  const state = useRef(new Animated.Value(DrawerState.Closed)).current;
  const margin = 0.1 * height;

  const [interpolateDy, setInterpolateDy] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset(pan._value);
      },
      onPanResponderMove: (
        _,
        { dy }
      ) => {
        return (
          (state._value == DrawerState.Closed &&  -(height / 2) < dy && dy < 20)
            || (state._value == DrawerState.Open && -20 < dy && dy < (height / 2))
        ) ? Animated.event(
          [
            null,
            { dy: pan }
          ],
          {
            useNativeDriver: false,
            listener: (_, gestureState) => {
              console.log(`dy: ${gestureState.dy}`);
            }
          }
        )(_, { dy }) : null;
      },
      onPanResponderRelease: (
        _,
        { dy }
      ) => {
        pan.flattenOffset();
        console.log(`---`);
        console.log(`pan value: ${pan._value}`);
        const nextState = getNextState(state._value, -dy, margin);
        console.log(`nxState: ${nextState}`);
        state.setValue(nextState);
        animateMove(pan, nextState);
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: -(height / 2),
          transform: [{ translateY: pan }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const animateMove = (value, toValue) => {
  Animated.timing(value, {
    toValue: -toValue,
    useNativeDriver: false,
    easing: Easing.out(Easing.exp)
  }).start(({ finished }) => {

  });
};

const getNextState = (
  currentState,
  val,
  margin,
) => {
  console.log(`cState: ${currentState}, val: ${val}, margin: ${margin}`);
  switch (currentState) {
    case DrawerState.Open:
      return val < -margin
        ? DrawerState.Closed
        : DrawerState.Open;
    case DrawerState.Closed:
      return val > margin
        ? DrawerState.Open
        : DrawerState.Closed;
    default:
      return currentState;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: height * 3 / 4,
    width,
    backgroundColor: "blue",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});

export default BottomDrawer;
