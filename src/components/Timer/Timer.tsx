import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from '@rneui/base';
import { Orbitron_500Medium, useFonts } from '@expo-google-fonts/orbitron';
import { TimerStyles } from './timer.styles';

const Timer: React.FC = () => {
  const defaultTime = 25 * 60; // 25 minutes
  const [count, setCount] = React.useState(defaultTime);
  const [fontsLoaded, error] = useFonts({
    Orbitron_500Medium,
  });

  const minutes: number = React.useMemo(() => {
    return Math.floor(count / 60);
  }, [count]);

  const seconds: number = React.useMemo(() => {
    return Math.floor(count % 60);
  }, [count]);
  const iconSize = 60;
  // const countDown = React.useCallback(() => {
  //   const interval = setInterval(() => {
  //     setCount((state) => state - 1);
  //   }, 1000);
  // }, []);

  // React.useEffect(() => {
  //   countDown();
  // }, []);


//TODO: STYLE ISIMLERINI DEGISTIR
//TODO: KOD REFACTORU YAPILACAK
  return (
    <View style={TimerStyles.mainContainer}>
      <View style={TimerStyles.timerContainer}>
        <Text style={TimerStyles.timerFont}>
          {String(minutes).padStart(2, '0')} :{' '}
          {String(seconds).padStart(2, '0')}
        </Text>
      </View>
      <View style={TimerStyles.iconsContainer}>
        <TouchableHighlight
          style={TimerStyles.btnContainer}
          onPress={() => {
            null;
          }}
        >
          <View style={TimerStyles.playBtn}>
            <Icon name="pause" color="#fff" size={iconSize - 20} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={TimerStyles.btnContainerPlay}
          onPress={() => {
            null;
          }}
        >
          <View style={TimerStyles.playBtn}>
            <Icon name="play-arrow" color="#000000" size={iconSize} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={TimerStyles.btnContainer}
          onPress={() => {
            null;
          }}
        >
          <View style={TimerStyles.playBtn}>
            <Icon name="refresh" color="#fff" size={iconSize - 20} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Timer;

