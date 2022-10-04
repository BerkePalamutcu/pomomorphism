import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Icon } from '@rneui/base';
import { Orbitron_500Medium, useFonts } from '@expo-google-fonts/orbitron';
import { TimerStyles } from './timer.styles';
import CircularProgress from 'react-native-circular-progress-indicator';

const Timer: React.FC = () => {
  const defaultTime = 25 * 60; // 25 minutes
  const [count, setCount] = React.useState(defaultTime);
  const [active, setActive] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    Orbitron_500Medium,
  });

  const minutes: number = React.useMemo(() => {
    return Math.floor(count / 60);
  }, [count]);

  const seconds: number = React.useMemo(() => {
    return Math.floor(count % 60);
  }, [count]);

  const iconSize = 50;

  React.useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);

      if (count === 0) {
        setActive(false);
        setCount(defaultTime);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, count]);

  const toggleTimer = React.useCallback(() => {
    setActive(!active);
  }, [active]);

  const resetTimer = () => {
    setActive(false);
    setCount(defaultTime);
  };
  //TODO: STYLE ISIMLERINI DEGISTIR
  return (
    <View style={TimerStyles.mainContainer}>
      <View style={TimerStyles.timerContainer}>
        <CircularProgress
          inActiveStrokeColor="#5c5c5c"
          inActiveStrokeOpacity={0.4}
          inActiveStrokeWidth={15}
          activeStrokeWidth={15}
          activeStrokeColor="#48cae4"
          progressValueStyle={TimerStyles.timerFont}
          clockwise={false}
          radius={156}
          value={count}
          maxValue={defaultTime}
          progressFormatter={() => {
            'worklet';
            return `${String(minutes).padStart(2, '0')} : ${String(
              seconds
            ).padStart(2, '0')}`; // 2 decimal places
          }}
        />
      </View>
      <View style={TimerStyles.iconsContainer}>
          <TouchableHighlight
            style={TimerStyles.btnContainerPlay}
            onPress={() => {
              toggleTimer();
            }}
          >
            <Icon
              name={active ? 'pause' : 'play-arrow'}
              color={active ? '#E8630A' : 'green'}
              size={iconSize}
            />
          </TouchableHighlight>
        <TouchableHighlight
          style={TimerStyles.btnContainer}
          onPress={() => {
            resetTimer();
          }}
        >
            <Icon name="refresh" color="red" size={iconSize} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Timer;
