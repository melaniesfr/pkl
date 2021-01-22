import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TambahAdmin from '../pages/TambahUMKM';

const Stack = createStackNavigator();

export default function TambahMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="TambahAdmin" component={TambahAdmin}
        options={{
          title: 'Tambah UMKM',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};