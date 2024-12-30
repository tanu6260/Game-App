import { } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/stack';





const App = () => {
  return (

    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;