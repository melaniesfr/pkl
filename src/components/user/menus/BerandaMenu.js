import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BerandaUser from '../pages/Beranda';

const Stack = createStackNavigator();

export default function BerandaMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="BerandaUser" component={BerandaUser}
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};