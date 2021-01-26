import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TambahUMKMAdmin } from '../../pages';

const Stack = createStackNavigator();

export default function TambahMenuAdmin({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="TambahUMKMAdmin" component={ TambahUMKMAdmin }
        options={{
          title: 'Tambah UMKM',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};