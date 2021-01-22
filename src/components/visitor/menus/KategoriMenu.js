import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import KategoriVisitor from '../pages/Kategori';

const Stack = createStackNavigator();

export default function KategoriMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="KategoriVisitor" component={KategoriVisitor}
        options={{
          title: 'Kategori',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};