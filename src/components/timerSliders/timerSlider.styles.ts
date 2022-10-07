import { StyleSheet } from 'react-native';

export const sliderStyles = StyleSheet.create({
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  sliderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pomodoroSlider: {
    width: 200,
    height: 40,
    transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
    display: 'flex',
    justifyContent: 'center',
  },
  timerHeader: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  pomodoroTimerValue: {
    color: '#fff'
  }
});
