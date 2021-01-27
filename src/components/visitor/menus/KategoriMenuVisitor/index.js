import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { KategoriVisitor, DetailPerKategoriVisitor, DetailKategoriVisitor } from '../../pages';

const Stack = createStackNavigator();

export default function KategoriMenuVisitor({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="KategoriVisitor" component={ KategoriVisitor }
        options={{
          title: 'Kategori',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="DetailPerKategoriVisitor" component={ DetailPerKategoriVisitor }
        options={{
          title: 'Daftar UMKM'
        }}
      />
      <Stack.Screen name="DetailKategoriVisitor" component={ DetailKategoriVisitor }
        options={{
          title: 'Detail UMKM',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};