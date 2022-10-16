import { StyleSheet } from 'react-native';
export const currentSessionStyles = StyleSheet.create({
  sessionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 50,
    marginTop: 50,
  },
  sessionWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'gray',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pomodoroSession: {
    backgroundColor: 'red',
  },
  shortBreakSession: {
    backgroundColor: 'green',
  },
  longBreakSession: {
    backgroundColor: '#468eab',
  },
});
