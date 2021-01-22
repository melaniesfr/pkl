import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PengaturanVisitor from '../pages/Pengaturan';
import BahasaVisitor from '../pages/Bahasa';
import TentangVisitor from '../pages/Tentang';

const Stack = createStackNavigator();

export default function PengaturanMenu({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="PengaturanVisitor" component={PengaturanVisitor}
        options={{
          title: 'Pengaturan',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="BahasaVisitor" component={BahasaVisitor}
        options={{
          title: 'Pilih Bahasa'
        }}
      />
      <Stack.Screen name="TentangVisitor" component={TentangVisitor}
        options={{
          title: 'Tentang Aplikasi'
        }}
      />
    </Stack.Navigator>
  );
};