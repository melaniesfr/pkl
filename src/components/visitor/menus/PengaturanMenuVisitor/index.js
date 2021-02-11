import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PengaturanVisitor, BahasaVisitor } from '../../pages';
import { colors, fonts } from '../../../../utils';

const Stack = createStackNavigator();

export default function PengaturanMenuVisitor({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.green1 },
        headerTintColor: colors.white,
        headerTitleStyle: { fontFamily: fonts.primary[700] }
      }}
    >
      <Stack.Screen name="PengaturanVisitor" component={ PengaturanVisitor }
        options={{
          title: 'Pengaturan',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="BahasaVisitor" component={ BahasaVisitor }
        options={{
          title: 'Pilih Bahasa'
        }}
      />
    </Stack.Navigator>
  );
};