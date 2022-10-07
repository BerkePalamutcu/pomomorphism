import { View, StyleSheet } from 'react-native';
import React from 'react';
import TimerSlider from '../components/timerSliders/TimerSlider';
const Settings: React.FC = () => {
  return (
    <View style={settingsViewStyles.settingsContainer}>
      <TimerSlider />
    </View>
  );
};

export default Settings;

const settingsViewStyles = StyleSheet.create({
  settingsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151414',
    flex: 1,
    borderColor: '#4e4b4b',
    borderTopWidth: 1,
  },
});
