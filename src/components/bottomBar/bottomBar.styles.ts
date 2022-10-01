import { StyleSheet } from "react-native";
export const BottomBarStyles = StyleSheet.create({
    BottomBarContainer: {
      display: 'flex',
      position: 'absolute',
      color: '#fff',
      bottom: 10,
      left: 0,
    },
    BottomBarIconsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 320,
    },
    BottomBarIconsWrapper: {
      backgroundColor: 'black',
      display: 'flex',
      padding: 10,
      opacity: 1,
      borderRadius: 20,
    },
  });
  