import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilUser from '../pages/Profil';

const Stack = createStackNavigator();

export default function ProfilMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="ProfilUser" component={ProfilUser}
        options={{
          title: 'Profil',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};