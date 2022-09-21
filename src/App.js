import React from 'react';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {colors} from './utils';
import "react-native-gesture-handler"
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={colors.primary} />
      <Router />
    </NavigationContainer>
  );
};

export default App;
