import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PengaturanUser from '../pages/Pengaturan';
import BahasaUser from '../pages/Bahasa';
import TentangUser from '../pages/Tentang';

const Stack = createStackNavigator();

export default function PengaturanMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'crimson' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="PengaturanUser" component={PengaturanUser}
        options={{
          title: 'Pengaturan',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="BahasaUser" component={BahasaUser}
        options={{
          title: 'Pilih Bahasa'
        }}
      />
      <Stack.Screen name="TentangUser" component={TentangUser}
        options={{
          title: 'Tentang Aplikasi'
        }}
      />
    </Stack.Navigator>
  );
};