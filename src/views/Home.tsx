import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import Timer from '../components/Timer/Timer';
import BottomBar from '../components/bottomBar/BottomBar';

const IMG_URL = { uri : 'https://newevolutiondesigns.com/images/freebies/4k-space-ipad-wallpaper-6.jpg'}

const Home: React.FC = () => {
  return (
    <ImageBackground style={homePageStyles.container} source={IMG_URL} resizeMode="cover">
      <View style={homePageStyles.container}>
        <Timer />
        <BottomBar/>
      </View>
    </ImageBackground>
  );
};

export default Home;

const homePageStyles = StyleSheet.create({
  container: {
    // backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
    position: 'relative'
  },
});
