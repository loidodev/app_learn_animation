import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';

const SCREENS = [
  {
    screen: 'Transition',
    title: 'Transition',
  },
  {
    screen: 'Animation',
    title: 'Animation',
  },
  {
    screen: 'MasKedAnimation',
    title: 'MasKedAnimation',
  },
  {
    screen: 'Search',
    title: 'Search',
  },
];

const RootScreen = () => {
  const {navigate} = useNavigation();

  const _onPress = screenName => {
    navigate(screenName);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {SCREENS.map(item => (
        <Pressable
          key={item.title}
          style={styles.thumbnail}
          onPress={() => _onPress(item.screen)}>
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: 'white',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 16,
  },
});

export default RootScreen;
