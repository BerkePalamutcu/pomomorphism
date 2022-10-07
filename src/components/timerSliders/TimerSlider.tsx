import { ScrollView, View, Text } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { sliderStyles } from './timerSlider.styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
const TimerSlider = () => {
  const [startValue, setStartValue] = React.useState(60);
  const times: number = useAppSelector<number>(
    (state) => state.timerSlice.pomodoroTime
  );
  return (
    <ScrollView contentContainerStyle={sliderStyles.sliderContainer}>
      <View style={sliderStyles.sliderWrapper}>
        <Text style={sliderStyles.timerHeader}>POMODORO TIME</Text>
        <View>
          <Text></Text>
          <Slider
            style={sliderStyles.pomodoroSlider}
            minimumValue={5}
            maximumValue={startValue}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#ffffff"
          />
        </View>
        <Text style={sliderStyles.pomodoroTimerValue}>{times}</Text>
      </View>
    </ScrollView>
  );
};

export default TimerSlider;
