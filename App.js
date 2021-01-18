import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routes/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};