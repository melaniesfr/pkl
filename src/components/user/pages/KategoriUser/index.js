import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors, fonts, assets } from '../../../../utils';
import { Kategori } from '../../../primary';

export default function KategoriUser({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailPerKategoriUser', { item: item })} style={styles.card}>
        { (item.kategori === 'Batik') && <FastImage source={{uri: assets.icons.ICBatik}} style={styles.icon} /> }
        { (item.kategori === 'Fashion') && <FastImage source={{uri: assets.icons.ICFashion}} style={styles.icon} /> }
        { (item.kategori === 'Kerajinan') && <FastImage source={{uri: assets.icons.ICHandmade}} style={styles.icon} /> }
        { (item.kategori === 'Kuliner') && <FastImage source={{uri: assets.icons.ICFood}} style={styles.icon} /> }
        { (item.kategori === 'Makanan Olahan') && <FastImage source={{uri: assets.icons.ICFoods}} style={styles.icon} /> }
        { (item.kategori === 'Minuman Olahan') && <FastImage source={{uri: assets.icons.ICDrink}} style={styles.icon} /> }

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