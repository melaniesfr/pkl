import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
import BerandaAdmin from '../components/admin/Beranda';
import UMKMAdmin from '../components/admin/UMKM';
import KategoriAdmin from '../components/admin/Kategori';
import CRUDAdmin from '../components/admin/CRUD';
import PostUMKMAdmin from '../components/admin/PostUMKM';
import DetailUMKMAdmin from '../components/admin/DetailUMKM';
import ProfilAdmin from '../components/admin/Profil';
import LainnyaAdmin from '../components/admin/Lainnya';
import BahasaAdmin from '../components/admin/Bahasa';
import TentangAdmin from '../components/admin/Tentang';

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

      {/* Stack Admin */}
      <Stack.Screen name="BerandaAdmin" component={BerandaAdmin}
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="UMKMAdmin" component={UMKMAdmin}
        options={{
          title: 'Daftar UMKM'
        }}
      />
      <Stack.Screen name="KategoriAdmin" component={KategoriAdmin}
        options={{
          title: 'Kategori UMKM'
        }}
      />
      <Stack.Screen name="CRUDAdmin" component={CRUDAdmin}
        options={({ navigation, route }) => ({
          title: 'CRUD UMKM',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('PostUMKMAdmin')}>
              <Icon
                name={'ios-add-circle'}
                color={'white'}
                size={30}
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen name="PostUMKMAdmin" component={PostUMKMAdmin}
        options={{
          title: 'Tambah UMKM'
        }}
      />
      <Stack.Screen name="DetailUMKMAdmin" component={DetailUMKMAdmin}
        options={{
          title: 'Detail UMKM'
        }}
      />
      <Stack.Screen name="ProfilAdmin" component={ProfilAdmin}
        options={{
          title: 'Profil'
        }}
      />
      <Stack.Screen name="LainnyaAdmin" component={LainnyaAdmin}
        options={{
          title: 'Lainnya'
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
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});