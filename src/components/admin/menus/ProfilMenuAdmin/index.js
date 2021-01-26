import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfilAdmin } from '../../pages';

const Stack = createStackNavigator();

export default function ProfilMenuAdmin({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="ProfilAdmin" component={ ProfilAdmin }
        options={{
          title: 'Profil',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};