import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BerandaAdmin, DetailUMKMAdmin, UpdateUMKMAdmin } from '../../pages';
import { colors, fonts } from '../../../../utils';

const Stack = createStackNavigator();

export default function BerandaMenuAdmin({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerTintColor: colors.green1,
        headerTitleStyle: { fontFamily: fonts.primary[700] }
      }}
    >
      <Stack.Screen name="BerandaAdmin" component={ BerandaAdmin }
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="DetailUMKMAdmin" component={ DetailUMKMAdmin }
        options={{
          title: 'Detail',
          headerShown: false
        }}
      />
      <Stack.Screen name="UpdateUMKMAdmin" component={ UpdateUMKMAdmin }
        options={{
          title: 'Update'
        }}
      />
    </Stack.Navigator>
  );
};