/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Gesture from './Gesture';

const Transition = () => {
  const [layoutRoot, setLayoutRoot] = useState(null);

  const _onLayout = ({nativeEvent: {layout}}) => {
    setLayoutRoot(layout);
  };

  return (
    <View style={{flex: 1}} onLayout={_onLayout}>
      <Text>header</Text>
      <TouchableOpacity>
        <Text>Transition</Text>
      </TouchableOpacity>
      {layoutRoot && (
        <Gesture width={layoutRoot?.width} height={layoutRoot?.height} />
      )}
    </View>
  );
};

export default Transition;
