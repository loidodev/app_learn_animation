/* eslint-disable react-native/no-inline-styles */
import MaskedView from '@react-native-masked-view/masked-view';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const {width} = Dimensions.get('screen');

const MaskedAnimation = () => {
  const translateX = useSharedValue(-width);
  const rotate = useSharedValue('0deg');

  useEffect(() => {
    translateX.value = withRepeat(withTiming(width, {duration: 2000}), -1);
  }, [rotate, translateX]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}, {rotate: rotate.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <MaskedView
        style={{flex: 1, flexDirection: 'row'}}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 60,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Basic Mask
            </Text>
          </View>
        }>
        <View style={{flex: 1, height: '100%', backgroundColor: '#e1e1e1'}} />
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFill,
              flexDirection: 'row',
            },
            style,
          ]}>
          <View style={{flex: 1, height: '100%', backgroundColor: '#324376'}} />
          <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}} />
          <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}} />
          <View style={{flex: 1, height: '100%', backgroundColor: 'red'}} />
        </Animated.View>
      </MaskedView>
    </View>
  );
};

export default MaskedAnimation;
