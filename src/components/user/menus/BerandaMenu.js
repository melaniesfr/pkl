import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BerandaUser from '../pages/Beranda';
import DetailUMKMUser from '../pages/DetailUMKM';

const Stack = createStackNavigator();

export default function BerandaMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: '#2eb877'
      }}
    >
      <Stack.Screen name="BerandaUser" component={BerandaUser}
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="DetailUMKMUser" component={DetailUMKMUser}
        options={{
          title: 'Detail',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};