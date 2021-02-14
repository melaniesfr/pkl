import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors, fonts, assets } from '../../../../utils';
import { Beranda } from '../../../primary';

export default function BerandaVisitor({ navigation }) {
  const renderItem = ({ item }) => {
    const GambarProduk = () => {
      if (item.gambar !== '') {
        return (
          <FastImage
            source={{uri: assets.baseURL + `images/${item.gambar}`}}
            style={styles.image}
          />
        );
      } else {
        return (
          <FastImage
            source={{uri: assets.images.IMBlank}}
            style={styles.image}
          />
        );
      }
    };

    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailUMKMVisitor', { item: item })}>
        <View style={{ margin: 5, position: 'relative' }}>
          <GambarProduk />

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
    <Beranda
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