import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Splash from '../components/SplashScreen';
import Login from '../components/Login';

// User
import BerandaMenuUser from '../components/user/menus/BerandaMenu';
import KategoriMenuUser from '../components/user/menus/KategoriMenu';
import PengaturanMenuUser from '../components/user/menus/PengaturanMenu';

// Admin
import BerandaMenuAdmin from '../components/admin/menus/BerandaMenu';
import KategoriMenuAdmin from '../components/admin/menus/KategoriMenu';
import TambahMenuAdmin from '../components/admin/menus/TambahMenu';
import ProfilMenuAdmin from '../components/admin/menus/ProfilMenu';
import PengaturanMenuAdmin from '../components/admin/menus/PengaturanMenu';

// ===========================================================================================

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function UserTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="UserTabScreen"
      activeColor="#fff"
      shifting={true}
    >
      <Tab.Screen
        name="BerandaMenuUser"
        component={BerandaMenuUser}
        options={{
          tabBarLabel: 'Beranda',
          tabBarColor: '#2eb877',
          tabBarIcon: ({ color }) => (
            <Icon name="home-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="KategoriMenuUser"
        component={KategoriMenuUser}
        options={{
          tabBarLabel: 'Kategori',
          tabBarColor: 'tomato',
          tabBarIcon: ({ color }) => (
            <Icon name="grid-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PengaturanMenuUser"
        component={PengaturanMenuUser}
        options={{
          tabBarLabel: 'Pengaturan',
          tabBarColor: 'crimson',
          tabBarIcon: ({ color }) => (
            <Icon name="settings-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function AdminTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="AdminTabScreen"
      activeColor="#fff"
      shifting={true}
    >
      <Tab.Screen
        name="BerandaMenuAdmin"
        component={BerandaMenuAdmin}
        options={{
          tabBarLabel: 'Beranda',
          tabBarColor: '#2eb877',
          tabBarIcon: ({ color }) => (
            <Icon name="home-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="KategoriMenuAdmin"
        component={KategoriMenuAdmin}
        options={{
          tabBarLabel: 'Kategori',
          tabBarColor: 'tomato',
          tabBarIcon: ({ color }) => (
            <Icon name="grid-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TambahMenuAdmin"
        component={TambahMenuAdmin}
        options={{
          tabBarLabel: 'Tambah',
          tabBarColor: '#4a94d9',
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilMenuAdmin"
        component={ProfilMenuAdmin}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: 'purple',
          tabBarIcon: ({ color }) => (
            <Icon name="person-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PengaturanMenuAdmin"
        component={PengaturanMenuAdmin}
        options={{
          tabBarLabel: 'Pengaturan',
          tabBarColor: 'crimson',
          tabBarIcon: ({ color }) => (
            <Icon name="settings-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash}
        options={({ navigation, route }) => ({
          title: 'Splash Screen',
          headerShown: false
        })}
      />
      <Stack.Screen name="Login" component={Login}
        options={({ navigation, route }) => ({
          title: 'Page Login',
          headerShown: false
        })}
      />
      <Stack.Screen name="UserScreen" component={UserTabScreen}
        options={{
          title: 'User Screen',
          headerShown: false
        }}
      />
      <Stack.Screen name="AdminScreen" component={AdminTabScreen}
        options={{
          title: 'Admin Screen',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});