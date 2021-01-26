import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { KategoriAdmin } from '../../pages';

const Stack = createStackNavigator();

export default function KategoriMenuAdmin({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="KategoriAdmin" component={ KategoriAdmin }
        options={{
          title: 'Kategori',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};