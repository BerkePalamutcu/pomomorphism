import { TouchableHighlight } from 'react-native';
import { View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
import { BottomBarStyles } from './bottomBar.styles';
const BottomBar = () => {
  const iconSize = 30;
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

