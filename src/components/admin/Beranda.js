import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import list from '../../images/list-icon.png';
import category from '../../images/category-icon.png';
import crud from '../../images/edit-icon.png';
import profile from '../../images/profile-icon.png';
import other from '../../images/settings-icon.png';

export default function Beranda({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.symbol}>
          <Text style={styles.symbolText}>Selamat datang!</Text>
        </View>

        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => navigation.navigate('UMKMAdmin')}>
              <Image source={list} style={styles.icon} />
              <Text style={styles.iconText}>UMKM</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('KategoriAdmin')}>
              <Image source={category} style={styles.icon} />
              <Text style={styles.iconText}>Kategori</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('CRUDAdmin')}>
              <Image source={crud} style={styles.icon} />
              <Text style={styles.iconText}>CRUD UMKM</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfilAdmin')}>
              <Image source={profile} style={styles.icon} />
              <Text style={styles.iconText}>Profil</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LainnyaAdmin')}>
              <Image source={other} style={styles.icon} />
              <Text style={styles.iconText}>Lainnya</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.symbol, { marginTop: 40 }]}>
          <Text style={styles.symbolText}>Profil dan Visi Misi</Text>
        </View>

        <View style={[styles.card, { height: 750 }]}>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  symbol: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    marginTop: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  symbolText: {
    color: 'white',
    fontWeight: 'bold'
  },
  card: {
    height: 250,
    width: '93%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  icon: {
    width: 75,
    height: 75,
    marginBottom: 5
  },
  iconText: {
    fontSize: 15,
    textAlign: 'center'
  }
});