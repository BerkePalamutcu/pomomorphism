import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../views/Home';
import Settings from '../views/Settings';
import Statistics from '../views/Statistics';
import Todos from '../views/Todos';
const Navigation: React.FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Todos" component={Todos} />
        <Drawer.Screen name="Statistics" component={Statistics} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
