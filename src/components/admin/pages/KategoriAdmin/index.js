import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts, assets } from '../../../../utils';
import { Kategori } from '../../../primary';

export default function KategoriAdmin({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailPerKategoriAdmin', { item: item })} style={styles.card}>
        { (item.kategori === 'Batik') && <Image source={{uri: assets.icons.ICBatik}} style={styles.icon} /> }
        { (item.kategori === 'Fashion') && <Image source={{uri: assets.icons.ICFashion}} style={styles.icon} /> }
        { (item.kategori === 'Kerajinan') && <Image source={{uri: assets.icons.ICHandmade}} style={styles.icon} /> }
        { (item.kategori === 'Kuliner') && <Image source={{uri: assets.icons.ICFood}} style={styles.icon} /> }
        { (item.kategori === 'Makanan Olahan') && <Image source={{uri: assets.icons.ICFoods}} style={styles.icon} /> }
        { (item.kategori === 'Minuman Olahan') && <Image source={{uri: assets.icons.ICDrink}} style={styles.icon} /> }

        <Text style={styles.text}>{ item.kategori }</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Kategori
      renderItem={ renderItem }
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 75,
    width: 75,
    alignSelf: 'center'
  },
  card: {
    backgroundColor: colors.white,
    elevation: 10,
    margin: 5,
    borderRadius: 10,
    width: (Dimensions.get('window').width / 2) - 20,
    height: 150,
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 7,
    color: colors.green1,
    fontFamily: fonts.primary[600]
  }
});