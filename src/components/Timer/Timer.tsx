import { View, StyleSheet } from 'react-native'
import React from 'react'

const Timer = () => {
  return (
    <>
      <View style={TimerStyles.timerContainer}>
      </View>
    </>
  )
}

export default Timer


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
      transform: [{ rotate: '45deg' }],
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
  