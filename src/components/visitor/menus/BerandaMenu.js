import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BerandaVisitor from '../pages/Beranda';

const Stack = createStackNavigator();

export default function BerandaMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: '#2eb877'
      }}
    >
      <Stack.Screen name="BerandaVisitor" component={BerandaVisitor}
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};