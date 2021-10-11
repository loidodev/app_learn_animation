/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {clamp} from 'react-native-redash';

const ITEM_SIZE = 120;

const Gesture = ({width, height}) => {
  const boundX = width - ITEM_SIZE;
  const boundY = height - ITEM_SIZE;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (_event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: ({velocityX, velocityY}) => {
      translateX.value = withDecay({
        velocity: velocityX,
        clamp: [0, boundX],
      });
      translateY.value = withDecay({
        velocity: velocityY,
        clamp: [0, boundY],
      });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <View
      style={{
        position: 'absolute',
        width,
        height,
      }}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={animatedStyle}>
          <View
            style={{
              width: ITEM_SIZE,
              height: ITEM_SIZE,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: ITEM_SIZE - 12,
                height: ITEM_SIZE - 12,
                borderRadius: ITEM_SIZE,
                backgroundColor: 'red',
              }}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Gesture;
