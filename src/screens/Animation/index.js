/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Animation = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      x.value = withSpring(0);
      y.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#001972',
            },
            animatedStyle,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Animation;
