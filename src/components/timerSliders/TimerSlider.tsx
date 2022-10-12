import { ScrollView, View, Text } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { sliderStyles, iconStyle } from './timerSlider.styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  changePomodoroTime,
  setLongBreakTime,
  setSessions,
  setShortBreakTime,
  sessionReplacer,
} from '../../redux/slices/timerSlice';
import NumericInput from 'react-native-numeric-input';
const TimerSlider = () => {
  const dispatch = useAppDispatch();
  const times: number = useAppSelector<number>(
    (state) => state.timerSlice.pomodoroTime
  );
  const shortBreakTime: number = useAppSelector<number>(
    (state) => state.timerSlice.shortBreakTime
  );
  const longBreakTime: number = useAppSelector<number>(
    (state) => state.timerSlice.longBreakTime
  );
  const sessions: number = useAppSelector<number>(
    (state) => state.timerSlice.sessions
  );

  return (
    <ScrollView contentContainerStyle={sliderStyles.sliderContainer}>
      <View style={sliderStyles.sliderWrapper}>
        <Text style={sliderStyles.header}>Time Settings</Text>
        <View style={sliderStyles.timeAdjuster}>
          <Text style={sliderStyles.timerHeader}>POMODORO</Text>
          <NumericInput
            value={times}
            onChange={(value) => dispatch(changePomodoroTime(value))}
            minValue={2}
            maxValue={60}
            totalWidth={150}
            totalHeight={40}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor="#ffffff"
            rightButtonBackgroundColor="#0553b3"
            leftButtonBackgroundColor="#0966d9"
            iconStyle={iconStyle.iconStyling}
          />
        </View>
        <View style={sliderStyles.timeAdjuster}>
          <Text style={sliderStyles.timerHeader}>SHORT BREAK</Text>
          <NumericInput
            value={shortBreakTime}
            onChange={(value) => dispatch(setShortBreakTime(value))}
            minValue={1}
            maxValue={60}
            totalWidth={150}
            totalHeight={40}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor="#ffffff"
            rightButtonBackgroundColor="#0553b3"
            leftButtonBackgroundColor="#0966d9"
            iconStyle={iconStyle.iconStyling}
          />
        </View>
        <View style={sliderStyles.timeAdjuster}>
          <Text style={sliderStyles.timerHeader}>LONG BREAK</Text>
          <NumericInput
            value={longBreakTime}
            onChange={(value) => dispatch(setLongBreakTime(value))}
            minValue={2}
            maxValue={60}
            totalWidth={150}
            totalHeight={40}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor="#ffffff"
            rightButtonBackgroundColor="#0553b3"
            leftButtonBackgroundColor="#0966d9"
            iconStyle={iconStyle.iconStyling}
          />
        </View>
        <View style={sliderStyles.timeAdjuster}>
          <Text style={sliderStyles.timerHeader}>SESSIONS</Text>
          <NumericInput
            value={sessions}
            onChange={(value) => {
              dispatch(setSessions(value));
              dispatch(sessionReplacer());
            }}
            minValue={-1}
            maxValue={30}
            totalWidth={150}
            totalHeight={40}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor="#ffffff"
            rightButtonBackgroundColor="#0553b3"
            leftButtonBackgroundColor="#0966d9"
            iconStyle={iconStyle.iconStyling}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default TimerSlider;
