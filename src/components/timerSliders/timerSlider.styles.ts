import { StyleSheet } from 'react-native';

export const sliderStyles = StyleSheet.create({
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
  },
  sliderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#4e4b4b',
    paddingBottom: 40
  },
  timerHeader: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 20,
  },
  timeAdjuster: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 350,
    marginBottom: 20
  },
  pomodoroTimerValue: {
    color: '#fff',
    marginLeft: 20,
    fontSize: 16,
  },
  header:{
    color: '#fff',
    fontSize: 24,
    marginBottom: 40
  }
});

export const iconStyle: any = StyleSheet.create({
  iconStyling: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textStyling:{
    fontWeight: 'bold'
  }
});
