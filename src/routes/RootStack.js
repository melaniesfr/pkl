import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login';

// User
import HomeUser from '../components/user/Home';
import LainnyaUser from '../components/user/Lainnya';
import LanguageUser from '../components/user/Language';
import AboutUser from '../components/user/About';

// Admin
import HomeAdmin from '../components/admin/Home';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2eb877' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="Login" component={Login}
        options={({ navigation, route }) => ({
          title: 'Page Login',
          headerShown: false
        })}
      />

      {/* Stack User */}
      <Stack.Screen name="HomeUser" component={HomeUser}
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="LainnyaUser" component={LainnyaUser}
        options={{
          title: 'Lainnya'
        }}
      />
      <Stack.Screen name="LanguageUser" component={LanguageUser}
        options={{
          title: 'Pilih Bahasa'
        }}
      />
      <Stack.Screen name="AboutUser" component={AboutUser}
        options={{
          title: 'Tentang Aplikasi'
        }}
      />

      {/* Stack Admin */}
      <Stack.Screen name="HomeAdmin" component={HomeAdmin}
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});