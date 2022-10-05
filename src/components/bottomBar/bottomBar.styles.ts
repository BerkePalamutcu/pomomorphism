import { StyleSheet } from 'react-native';
export const BottomBarStyles = StyleSheet.create({
  BottomBarContainer: {
    display: 'flex',
    backgroundColor: '#1e2024',
    color: '#fff',
    marginBottom: 20,
    width: 400,
    height: 100,
  },
  BottomBarIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20
  },
  BottomBarIconsWrapper: {
    display: 'flex',
    padding: 10,
    opacity: 1,
  },
});
