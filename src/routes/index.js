import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils';
import { Login, Register, Splash } from '../components/primary';
import { BerandaMenuVisitor, KategoriMenuVisitor, PengaturanMenuVisitor } from '../components/visitor';
import { BerandaMenuUser, KategoriMenuUser, ProfilMenuUser, PengaturanMenuUser } from '../components/user';
import { BerandaMenuAdmin, KategoriMenuAdmin, TambahMenuAdmin, ProfilMenuAdmin, PengaturanMenuAdmin } from '../components/admin';

// ===========================================================================================

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function VisitorTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="VisitorTabScreen"
      activeColor={colors.green1}
      inactiveColor={colors.grey}
      shifting={true}
    >
      <Tab.Screen
        name="BerandaMenuVisitor"
        component={ BerandaMenuVisitor }
        options={{
          tabBarLabel: 'Beranda',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="KategoriMenuVisitor"
        component={ KategoriMenuVisitor }
        options={{
          tabBarLabel: 'Kategori',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="grid-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PengaturanMenuVisitor"
        component={ PengaturanMenuVisitor }
        options={{
          tabBarLabel: 'Pengaturan',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// ===========================================================================================

function UserTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="UserTabScreen"
      activeColor={colors.green1}
      inactiveColor={colors.grey}
      shifting={true}
    >
      <Tab.Screen
        name="BerandaMenuUser"
        component={BerandaMenuUser}
        options={{
          tabBarLabel: 'Beranda',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="KategoriMenuUser"
        component={ KategoriMenuUser }
        options={{
          tabBarLabel: 'Kategori',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="grid-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilMenuUser"
        component={ ProfilMenuUser }
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PengaturanMenuUser"
        component={ PengaturanMenuUser }
        options={{
          tabBarLabel: 'Pengaturan',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// ===========================================================================================

function AdminTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="AdminTabScreen"
      activeColor={colors.green1}
      inactiveColor={colors.grey}
      shifting={true}
    >
      <Tab.Screen
        name="BerandaMenuAdmin"
        component={BerandaMenuAdmin }
        options={{
          tabBarLabel: 'Beranda',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="KategoriMenuAdmin"
        component={ KategoriMenuAdmin }
        options={{
          tabBarLabel: 'Kategori',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="grid-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TambahMenuAdmin"
        component={ TambahMenuAdmin }
        options={{
          tabBarLabel: 'Tambah',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilMenuAdmin"
        component={ ProfilMenuAdmin }
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PengaturanMenuAdmin"
        component={ PengaturanMenuAdmin }
        options={{
          tabBarLabel: 'Pengaturan',
          tabBarColor: colors.white,
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={26} />
          ),
        }}
      />
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