import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import list from '../../images/list-icon.png';
import category from '../../images/category-icon.png';
import other from '../../images/other-icon.png';

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.symbol}>
          <Text style={styles.symbolText}>Selamat datang!</Text>
        </View>

        <View style={styles.card}>
          <TouchableOpacity>
            <Image source={list} style={styles.icon} />
            <Text style={styles.iconText}>UMKM</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={category} style={styles.icon} />
            <Text style={styles.iconText}>Kategori</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LainnyaUser')}>
            <Image source={other} style={styles.icon} />
            <Text style={styles.iconText}>Lainnya</Text>
          </TouchableOpacity>
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
    height: 150,
    width: '93%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
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