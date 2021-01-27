import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { KategoriUser, DetailPerKategoriUser, DetailKategoriUser } from '../../pages';

const Stack = createStackNavigator();

export default function KategoriMenuUser({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="KategoriUser" component={ KategoriUser }
        options={{
          title: 'Kategori',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="DetailPerKategoriUser" component={ DetailPerKategoriUser }
        options={{
          title: 'Daftar UMKM'
        }}
      />
      <Stack.Screen name="DetailKategoriUser" component={ DetailKategoriUser }
        options={{
          title: 'Detail UMKM',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};