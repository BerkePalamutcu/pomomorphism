import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

const Timer: React.FC = () => {
  const defaultTime = 25 * 60; // 25 minutes
  const [count, setCount] = React.useState(defaultTime);

  const minutes: number = React.useMemo(() => {
    return Math.floor(count / 60);
  }, [count]);

  const seconds: number = React.useMemo(() => {
    return Math.floor(count % 60);
  }, [count]);

  const countDown = () => {
    const interval = setInterval(() => {
      setCount((state) => state - 1);
    }, 1000);
  };
  
  React.useEffect(() => {
    countDown();
  }, []);

  return (
    <View>
      <View style={TimerStyles.timerContainer}>
        <Text>
          {minutes} : {seconds}
        </Text>
      </View>
    </View>
  );
};

export default Timer;

const TimerStyles = StyleSheet.create({
  timerContainer: {
    width: 320,
    height: 320,
    borderRadius: 160,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderEndWidth: 3,
    borderStartWidth: 3,
    borderStartColor: '#fff',
    borderEndColor: '#949494',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 11,
  },
});
