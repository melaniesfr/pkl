import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BerandaAdmin from '../pages/Beranda';
import DetailUMKMAdmin from '../pages/DetailUMKM';

const Stack = createStackNavigator();

export default function BerandaMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: '#2eb877'
      }}
    >
      <Stack.Screen name="BerandaAdmin" component={BerandaAdmin}
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="DetailUMKMAdmin" component={DetailUMKMAdmin}
        options={{
          title: 'Detail',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};