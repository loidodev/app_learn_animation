/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import KeywordAnimated from './KeywordAnimated';

const ITEM_HEIGHT = 50;
const DATA = ['Kem chuối', 'Cơm tấm', 'Sườn nướng', 'Bún chả', 'Bánh kẹp'];

const Search = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: ITEM_HEIGHT,
          backgroundColor: 'white',
          overflow: 'hidden',
          borderRadius: 15,
          paddingHorizontal: 15,
        }}>
        <KeywordAnimated data={DATA} height={ITEM_HEIGHT} duration={1200} />
      </View>
    </View>
  );
};

export default Search;
