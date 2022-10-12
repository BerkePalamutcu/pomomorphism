import Navigation from "./src/navigation/Navigation";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import React from "react";
export const GestureHandleWrapper = gestureHandlerRootHOC(() => (
    <>
      <Navigation />
    </>
  ));