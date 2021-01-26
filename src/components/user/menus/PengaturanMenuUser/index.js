import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PengaturanUser, BahasaUser, TentangUser, LogoutUser } from '../../pages';

const Stack = createStackNavigator();

export default function PengaturanMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="PengaturanUser" component={ PengaturanUser }
        options={{
          title: 'Pengaturan',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="BahasaUser" component={ BahasaUser }
        options={{
          title: 'Pilih Bahasa'
        }}
      />
      <Stack.Screen name="TentangUser" component={ TentangUser }
        options={{
          title: 'Tentang Aplikasi'
        }}
      />
      <Stack.Screen name="LogoutUser" component={ LogoutUser }
        options={{
          title: 'Logout'
        }}
      />
    </Stack.Navigator>
  );
};