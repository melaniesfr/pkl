import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from '../components/Login';

// User
import BerandaUser from '../components/user/Beranda';
import UMKMUser from '../components/user/UMKM';
import KategoriUser from '../components/user/Kategori';
import LainnyaUser from '../components/user/Lainnya';
import BahasaUser from '../components/user/Bahasa';
import TentangUser from '../components/user/Tentang';

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

      {/* ================================================================================================= */}

      {/* Stack User */}
      <Stack.Screen name="BerandaUser" component={BerandaUser}
        options={{
          title: 'Beranda',
          headerLeft: null,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="UMKMUser" component={UMKMUser}
        options={{
          title: 'Daftar UMKM'
        }}
      />
      <Stack.Screen name="KategoriUser" component={KategoriUser}
        options={{
          title: 'Kategori UMKM'
        }}
      />
      <Stack.Screen name="LainnyaUser" component={LainnyaUser}
        options={{
          title: 'Lainnya'
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

      {/* ================================================================================================= */}

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