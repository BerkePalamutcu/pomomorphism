import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Timer from '../components/Timer/Timer';
import BottomBar from '../components/bottomBar/BottomBar';
import CurrentSession from '../components/currentSession/CurrentSession';
import Menu from '../components/menu/Menu';
import * as NavigationBar from 'expo-navigation-bar';

const IMG_URL = {
  uri: 'https://newevolutiondesigns.com/images/freebies/4k-space-ipad-wallpaper-6.jpg',
};

const Home: React.FC = () => {

  NavigationBar.setPositionAsync('absolute');
  NavigationBar.setBackgroundColorAsync('#ffffff00');
  NavigationBar.setBehaviorAsync('inset-swipe');

  return (
    // <ImageBackground
    //   style={homePageStyles.container}
    //   source={IMG_URL}
    //   resizeMode="cover"
    // >

    <TouchableWithoutFeedback
      onPress={() =>
        setTimeout(() => NavigationBar.setVisibilityAsync('hidden'), 2000)
      }
    >
      <View style={homePageStyles.container}>
        <CurrentSession />
        <Timer />
        <BottomBar/>
      </View>
    </TouchableWithoutFeedback>
    // </ImageBackground>
  );
};

export default Home;

const homePageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#151414',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
    position: 'relative',
  },
});
