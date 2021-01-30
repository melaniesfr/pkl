import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Register, Splash } from '../components/primary';
import { BerandaMenuVisitor, KategoriMenuVisitor, PengaturanMenuVisitor } from '../components/visitor';
import { BerandaMenuUser, KategoriMenuUser, ProfilMenuUser, PengaturanMenuUser } from '../components/user';
import { BerandaMenuAdmin, KategoriMenuAdmin, TambahMenuAdmin, ProfilMenuAdmin, PengaturanMenuAdmin } from '../components/admin';
import { BottomNavigatorVisitor } from '../components/visitor/navigator';
import { BottomNavigatorUser } from '../components/user/navigator';
import { BottomNavigatorAdmin } from '../components/admin/navigator';

// ===========================================================================================

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function VisitorTabScreen() {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigatorVisitor { ...props } />}>
      <Tab.Screen name="Beranda" component={ BerandaMenuVisitor } />
      <Tab.Screen name="Kategori" component={ KategoriMenuVisitor } />
      <Tab.Screen name="Pengaturan" component={ PengaturanMenuVisitor } />
    </Tab.Navigator>
  );
};

// ===========================================================================================

function UserTabScreen() {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigatorUser { ...props } />}>
      <Tab.Screen name="Beranda" component={ BerandaMenuUser } />
      <Tab.Screen name="Kategori" component={ KategoriMenuUser } />
      <Tab.Screen name="Profil" component={ ProfilMenuUser } />
      <Tab.Screen name="Pengaturan" component={ PengaturanMenuUser } />
    </Tab.Navigator>
  );
};

// ===========================================================================================

function AdminTabScreen() {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigatorAdmin { ...props } />}>
      <Tab.Screen name="Beranda" component={ BerandaMenuAdmin } />
      <Tab.Screen name="Kategori" component={ KategoriMenuAdmin } />
      <Tab.Screen name="Tambah" component={ TambahMenuAdmin } />
      <Tab.Screen name="Profil" component={ ProfilMenuAdmin } />
      <Tab.Screen name="Pengaturan" component={ PengaturanMenuAdmin } />
    </Tab.Navigator>
  );
};

// ===========================================================================================

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={ Splash }
        options={({ navigation, route }) => ({
          title: 'Splash Screen',
          headerShown: false
        })}
      />
      <Stack.Screen name="Login" component={ Login }
        options={({ navigation, route }) => ({
          title: 'Page Login',
          headerShown: false
        })}
      />
      <Stack.Screen name="Register" component={ Register }
        options={({ navigation, route }) => ({
          title: 'Page Register',
          headerShown: false
        })}
      />
      <Stack.Screen name="VisitorScreen" component={ VisitorTabScreen }
        options={{
          title: 'Visitor Screen',
          headerShown: false
        }}
      />
      <Stack.Screen name="UserScreen" component={ UserTabScreen }
        options={{
          title: 'User Screen',
          headerShown: false
        }}
      />
      <Stack.Screen name="AdminScreen" component={ AdminTabScreen }
        options={{
          title: 'Admin Screen',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};