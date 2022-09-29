import { StyleSheet, View } from 'react-native';
import React from 'react';
import Timer from '../components/Timer/Timer';
const Home: React.FC = () => {
  return (
    <View style={homePageStyles.container}>
      <Timer/>
    </View>
  );
};

export default Home;


  const homePageStyles = StyleSheet.create({
    container: {
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      display: 'flex',
    }
})