import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilAdmin from '../pages/Profil';

const Stack = createStackNavigator();

export default function ProfilMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'purple' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="ProfilAdmin" component={ProfilAdmin}
        options={{
          title: 'Profil',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};