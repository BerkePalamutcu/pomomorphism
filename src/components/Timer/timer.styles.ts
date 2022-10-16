import { StyleSheet } from 'react-native';
export const TimerStyles = StyleSheet.create({
  timerContainer: {
    marginTop: 50,
    width: 320,
    height: 320,
    borderRadius: 160,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#151414',
    shadowColor: '#0c72ab',
    elevation: 60,
    position: 'relative',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerFont: {
    fontFamily: 'ChakraPetch_500Medium',
    fontSize: 70,
    position: 'absolute',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    letterSpacing: 1,
    paddingVertical: 50,
    width: 255
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 40,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    elevation: 10,
    shadowColor: '#333b47',
  },
  btnContainerPlay: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 40,
    marginLeft: 10,
    marginRight: 10,
    elevation: 10,
    padding: 10,
    shadowColor: '#333b47',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 60,
    marginBottom: 50,
  },
  gradient: {
    borderRadius: 50,
    padding: 5,
  },
});
