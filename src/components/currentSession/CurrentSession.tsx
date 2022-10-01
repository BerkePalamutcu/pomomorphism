import React from 'react';
import { View, Text } from 'react-native';
import { currentSessionStyles } from './currentSession.styles';

const CurrentSession = () => {
  const currentSession = true;
  return (
    <View style={currentSessionStyles.sessionsContainer}>
      <View
        style={
          currentSession
            ? currentSessionStyles.currentSession
            : currentSessionStyles.sessionWrapper
        }
      >
        <Text style={currentSessionStyles.sessionText}>Pomodoro</Text>
      </View>
      <View style={currentSessionStyles.sessionWrapper}>
        <Text style={currentSessionStyles.sessionText}>Short Break</Text>
      </View>
      <View style={currentSessionStyles.sessionWrapper}>
        <Text style={currentSessionStyles.sessionText}>Long Break</Text>
      </View>
    </View>
  );
};

export default CurrentSession;
