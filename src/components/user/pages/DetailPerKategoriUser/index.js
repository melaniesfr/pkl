import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../../utils';
import { DetailPerKategori } from '../../../primary';

export default function DetailPerKategoriUser({ route, navigation }) {
  const { item } = route.params;

  const renderItem = ({ item }) => {
    const GambarProduk = () => {
      if (item.gambar !== '') {
        return (
          <Image
            source={{uri: `http://192.168.43.89/pkl/images/${item.gambar}`}}
            style={styles.image}
          />
        );
      } else {
        return (
          <Image
            source={{uri: `https://picsum.photos/900/600?random=${item.id}`}}
            style={styles.image}
          />
        );
      }
    };

    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailKategoriUser', { item: item })}>
        <View style={{ margin: 5, position: 'relative' }}>
          <GambarProduk />
          
          {/* <Image source={{uri: `https://picsum.photos/900/600?random=${item.id}`}} style={styles.image} /> */}

          <View style={styles.garisHitam}>
            <View style={styles.wadahText}>
              <Text style={styles.text}>{ item.produk }</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <DetailPerKategori
      item={ item }
      renderItem={ renderItem }
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: (Dimensions.get('window').width / 2) - 15,
    height: (Dimensions.get('window').height / 6),
    borderRadius: 5
  },
  garisHitam: {
    position: 'absolute',
    bottom: 0,
    height: 25,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomLeftRadius: 5,
    borderBottomEndRadius: 5
  },
  wadahText: {
    position: 'absolute',
    bottom: 5,
    left: 5
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primary[800],
    fontSize: 12
  }
});