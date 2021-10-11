/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect} from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const KeywordAnimated = ({data, height, duration = 1000}) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(withSequence(...getTiming()), -1, true);
  }, [getTiming, translateY]);

  const getTiming = useCallback(() => {
    'worklet';
    return data.map((_item, index) => {
      return withDelay(duration, withTiming(-(index * height), {duration}));
    });
  }, [data, duration, height]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <Animated.View style={[style, {flex: 1}]}>
      {data.map(item => {
        return (
          <View
            style={{
              width: '100%',
              height,
              justifyContent: 'center',
            }}>
            <Text>{item}</Text>
          </View>
        );
      })}
    </Animated.View>
  );
};

export default KeywordAnimated;
