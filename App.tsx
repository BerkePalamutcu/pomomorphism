import 'react-native-gesture-handler';
import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { GestureHandleWrapper } from './GestureHoc';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandleWrapper />
    </Provider>
  );
};

export default App;
