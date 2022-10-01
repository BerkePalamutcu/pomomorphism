import { StyleSheet } from 'react-native';
export const currentSessionStyles = StyleSheet.create({
    sessionsContainer: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      top: 80,
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
      fontWeight: 'bold'
    },
    currentSession: {
      backgroundColor: "red",
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 20,
      paddingRight: 20,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  