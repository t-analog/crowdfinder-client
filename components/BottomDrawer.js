import React, { useRef, useState } from "react";
import {
  Text,
  View,
  Easing,
  Animated,
  StyleSheet,
  Dimensions,
  PanResponder,
} from "react-native";

const { width, height } = Dimensions.get('window');

const DrawerState = {
  Open: (height / 2) - 20,
  Closed: 0
};

const BottomDrawer = ({ children }) => {
  const pan = useRef(new Animated.Value(DrawerState.Closed)).current;
  const state = useRef(new Animated.Value(DrawerState.Closed)).current;
  const margin = 0.1 * height;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // onMoveShouldSetPanResponder: (_, { y0 }) => {
      //   console.log(`${state._value}, ${height * 3 / 4}, ${y0}`);
      //   return (
      //     (state._value == DrawerState.Closed && (height * 3 / 4) < y0 && y0 < ((height * 3 / 4) + 40))
      //     // || (state._value == DrawerState.Open && -40 < dy && dy < (height / 2))
      //     // (state._value == DrawerState.Closed && (height * 3 / 4) < y0 && y0 < ((height * 3 / 4) + 40) && -(height / 2) < dy && dy < 40)
      //     // || (state._value == DrawerState.Open && (height * 1 / 4) < y0 && y0 < ((height * 1 / 4) + 40) && -40 < dy && dy < (height / 2))
      //   ) ? true
      //     : false
      // },
      onMoveShouldSetPanResponder: (_, { y0 }) => {
        return true;
      },
      onPanResponderGrant: (_, { y0 }) => {
        // console.log(`y: ${event.nativeEvent.pageY}`);
        // console.log(`y: ${gestureState.y0}`);
        console.log(`${state._value}, ${height * 3 / 4}, ${height * 1 / 4}, ${y0}`);
        pan.setOffset(pan._value);
      },
      onPanResponderMove: (
        _,
        { y0, dy }
      ) => {
        return (
          // (state._value == DrawerState.Closed && -(height / 2) < dy && dy < 40)
          // || (state._value == DrawerState.Open && -40 < dy && dy < (height / 2))
          (state._value == DrawerState.Closed && (height * 3 / 4) < y0 && y0 < ((height * 3 / 4) + 40) && -(height / 2) < dy && dy < 40)
          || (state._value == DrawerState.Open && (height * 1 / 4) + 20 < y0 && y0 < ((height * 1 / 4) + 60) && -40 < dy && dy < (height / 2))
          // true
        ) ? Animated.event(
          [
            null,
            { dy: pan }
          ],
          {
            useNativeDriver: false,
            listener: (_, gestureState) => {
              // console.log(`dy: ${gestureState.dy}`);
            }
          }
        )(_, { dy }) : null;
      },
      onPanResponderRelease: (
        _,
        { y0, dy }
      ) => {
        if (
        //   // (state._value == DrawerState.Closed && (height * 3 / 4) < y0 && y0 < ((height * 3 / 4) + 40))
        //   // || (state._value == DrawerState.Open && (height * 1 / 4) < y0 && y0 < ((height * 1 / 4) + 40))
          (state._value == DrawerState.Closed && (height * 3 / 4) < y0 && y0 < ((height * 3 / 4) + 40))
          || (state._value == DrawerState.Open && (height * 1 / 4) + 20 < y0 && y0 < ((height * 1 / 4) + 60))
        //   true
        ) {
        pan.flattenOffset();
        const nextState = getNextState(state._value, -dy, margin);
        state.setValue(nextState);
        animateMove(pan, nextState);
        // console.log(`---`);
        // console.log(`pan value: ${pan._value}`);
        // console.log(`nxState: ${nextState}, y0: ${y0}, height: ${height}`);
        }
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: -(height * 6 / 4),
          /* bottom: 0, */
          transform: [{ translateY: pan }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box}>
          {children}
        </View>
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
  // console.log(`cState: ${currentState}, val: ${val}, margin: ${margin}`);
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
    backgroundColor: "#666",
    borderWidth: 1,
    borderColor: "black",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 40
  }
});

export default BottomDrawer;
