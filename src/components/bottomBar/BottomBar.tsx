import { StyleSheet, TouchableHighlight } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';

const BottomBar = () => {
  const iconSize = 40;
  return (
    <View style={BottomBarStyles.BottomBarContainer}>
      <View style={BottomBarStyles.BottomBarIconsContainer}>
        <View style={BottomBarStyles.BottomBarIconsWrapper}>
          <TouchableHighlight
            onPress={() => {
              null;
            }}
          >
            <Icon name="timer" color="#fff" size={iconSize} />
          </TouchableHighlight>
        </View>
        <View style={BottomBarStyles.BottomBarIconsWrapper}>
          <TouchableHighlight
            onPress={() => {
              null;
            }}
          >
            <Icon name="list" color="#fff" size={iconSize} />
          </TouchableHighlight>
        </View>
        <View style={BottomBarStyles.BottomBarIconsWrapper}>
          <TouchableHighlight
            onPress={() => {
              null;
            }}
          >
            <Icon name="bar-chart" color="#fff" size={iconSize} />
          </TouchableHighlight>
        </View>
        <View style={BottomBarStyles.BottomBarIconsWrapper}>
          <TouchableHighlight
            onPress={() => {
              null;
            }}
          >
            <Icon name="settings" color="#fff" size={iconSize} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default BottomBar;

const BottomBarStyles = StyleSheet.create({
  BottomBarContainer: {
    display: 'flex',
    position: 'absolute',
    color: '#fff',
    bottom: 10,
    left: 0,
  },
  BottomBarIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  BottomBarIconsWrapper: {
    backgroundColor: 'black',
    display: 'flex',
    padding: 10,
    opacity: 1,
    borderRadius: 20,
  },
});
