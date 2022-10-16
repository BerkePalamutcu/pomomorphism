import React from 'react';
import { View, Text } from 'react-native';
import { currentSessionStyles } from './currentSession.styles';
import { useAppSelector } from '../../redux/hooks';

const CurrentSession = () => {
  const currentSession = true;
  const session = useAppSelector((state) => state.sessionSlice.currentSession);

  return (
    <View style={currentSessionStyles.sessionsContainer}>
      <View
        style={[
          currentSessionStyles.sessionWrapper,
          session === 'Pomodoro' && currentSessionStyles.pomodoroSession,
        ]}
      >
        <Text style={currentSessionStyles.sessionText}>Pomodoro</Text>
      </View>
      <View
        style={[
          currentSessionStyles.sessionWrapper,
          session === 'Short Break' && currentSessionStyles.shortBreakSession,
        ]}
      >
        <Text style={currentSessionStyles.sessionText}>Short Break</Text>
      </View>
      <View
        style={[
          currentSessionStyles.sessionWrapper,
          session === 'Long Break' && currentSessionStyles.longBreakSession,
        ]}
      >
        <Text style={currentSessionStyles.sessionText}>Long Break</Text>
      </View>
    </View>
  );
};

export default CurrentSession;
