import { TouchableHighlight } from 'react-native';
import { View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
import { BottomBarStyles } from './bottomBar.styles';
import { useNavigation } from '@react-navigation/native';
const BottomBar: React.FC = () => {
  const iconSize = 30;
  const navigation: any = useNavigation();
  return (
    <View style={BottomBarStyles.BottomBarContainer}>
      <View style={BottomBarStyles.BottomBarIconsContainer}>
        <View style={BottomBarStyles.BottomBarIconsWrapper}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Icon name="timer" color="#fff" size={iconSize} />
          </TouchableHighlight>
        </View>
        <View style={BottomBarStyles.BottomBarIconsWrapper}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Task List');
            }}
          >
            <Icon name="list" color="#fff" size={iconSize} />
          </TouchableHighlight>
        </View>
        <View style={BottomBarStyles.BottomBarIconsWrapper}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Statistics');
            }}
          >
            <Icon name="bar-chart" color="#fff" size={iconSize} />
          </TouchableHighlight>
        </View>
        <View style={BottomBarStyles.BottomBarIconsWrapper}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Settings');
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
