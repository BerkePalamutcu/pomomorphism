import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Icon } from '@rneui/base';
import { Orbitron_500Medium, useFonts } from '@expo-google-fonts/orbitron';
import { TimerStyles } from './timer.styles';
import CircularProgress from 'react-native-circular-progress-indicator';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { sessionCounter, setSessions, sessionReplacer } from '../../redux/slices/timerSlice';

SplashScreen.preventAutoHideAsync();

const Timer: React.FC = () => {
  const iconSize = 50;
  const dispatch = useAppDispatch();
  const pomodoroTime: number =
    useAppSelector<number>((state) => state.timerSlice.pomodoroTime) * 60;

  const shortBreakTime: number =
    useAppSelector<number>((state) => state.timerSlice.shortBreakTime) * 60;

  const longBreakTime: number =
    useAppSelector<number>((state) => state.timerSlice.longBreakTime) * 60;

    //POINTER
  const sessions: number = useAppSelector<number>(
    (state) => state.timerSlice.sessionPointer
  );

  //REAL SESSIONS
  const sessionsSetted: number = useAppSelector<number>(
    (state) => state.timerSlice.sessions
  );

  const [count, setCount] = React.useState(pomodoroTime);
  const [active, setActive] = React.useState(false);
  const [breakActive, setBreakActive] = React.useState(false);

  const minutes: number = React.useMemo(() => {
    return Math.floor(count / 60);
  }, [count, pomodoroTime]);

  const seconds: number = React.useMemo(() => {
    return Math.floor(count % 60);
  }, [count, pomodoroTime]);

  const toggleTimer = React.useCallback(() => {
    setActive(!active);
  }, [active]);

  const resetTimer = () => {
    setActive(false);
    setCount(pomodoroTime);
    setBreakActive(false);
    dispatch(setSessions(sessionsSetted));
    dispatch(sessionReplacer())
  };

  React.useEffect(() => {
    setCount(pomodoroTime);
  }, [pomodoroTime]);

  React.useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);

      if (count === 0) {
        if (breakActive === false && sessions > 0) {
          if (sessions === 1) {
            setCount(longBreakTime);
            dispatch(sessionCounter());
          } else {
            setCount(shortBreakTime);
            dispatch(sessionCounter());
          }
          setBreakActive(true);
        } else if (breakActive && sessions > 0) {
          setBreakActive(false);
          setCount(pomodoroTime);
        } else if (sessions === 0) {
          resetTimer();
        }
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, count, pomodoroTime]);

  const [fontsLoaded] = useFonts({
    Orbitron_500Medium,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={TimerStyles.mainContainer} onLayout={() => onLayoutRootView()}>
      <View style={TimerStyles.timerContainer}>
        <Text style={TimerStyles.timerFont}>
          {' '}
          {`${String(minutes).padStart(2, '0')}`} :{' '}
          {`${String(seconds).padStart(2, '0')}`}{' '}
        </Text>
        {sessions > 0 ? (
          <CircularProgress
            showProgressValue={false}
            inActiveStrokeColor="#5c5c5c"
            inActiveStrokeOpacity={0.4}
            inActiveStrokeWidth={15}
            activeStrokeWidth={15}
            activeStrokeColor="#48cae4"
            clockwise={false}
            radius={160}
            value={count}
            maxValue={breakActive ? shortBreakTime : pomodoroTime}
            progressValueColor="white"
          ></CircularProgress>
        ) : (
          <CircularProgress
            showProgressValue={false}
            inActiveStrokeColor="#5c5c5c"
            inActiveStrokeOpacity={0.4}
            inActiveStrokeWidth={15}
            activeStrokeWidth={15}
            activeStrokeColor="#48cae4"
            clockwise={false}
            radius={160}
            value={count}
            maxValue={sessions === 0 && active ? longBreakTime : pomodoroTime}
            progressValueColor="white"
          ></CircularProgress>
        )}
      </View>

      <View style={TimerStyles.iconsContainer}>
        <TouchableHighlight
          style={TimerStyles.btnContainerPlay}
          onPress={() => {
            toggleTimer();
          }}
        >
          <LinearGradient
            style={TimerStyles.gradient}
            colors={['#00B4DB', '#0083B0']}
          >
            <Icon
              name={active ? 'pause' : 'play-arrow'}
              color="white"
              size={iconSize}
            />
          </LinearGradient>
        </TouchableHighlight>
        <TouchableHighlight
          style={TimerStyles.btnContainer}
          onPress={() => {
            resetTimer();
          }}
        >
          <LinearGradient
            style={TimerStyles.gradient}
            colors={['#ED213A', '#93291E']}
          >
            <Icon name="refresh" color="white" size={iconSize} />
          </LinearGradient>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Timer;
