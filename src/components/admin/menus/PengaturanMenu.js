import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PengaturanAdmin from '../pages/Pengaturan';
import BahasaAdmin from '../pages/Bahasa';
import TentangAdmin from '../pages/Tentang';
import LogoutAdmin from '../pages/Logout';

const Stack = createStackNavigator();

export default function PengaturanMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="PengaturanAdmin" component={PengaturanAdmin}
        options={{
          title: 'Pengaturan',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="BahasaAdmin" component={BahasaAdmin}
        options={{
          title: 'Pilih Bahasa'
        }}
      />
      <Stack.Screen name="TentangAdmin" component={TentangAdmin}
        options={{
          title: 'Tentang Aplikasi'
        }}
      />
      <Stack.Screen name="LogoutAdmin" component={LogoutAdmin}
        options={{
          title: 'Logout'
        }}
      />
    </Stack.Navigator>
  );
};