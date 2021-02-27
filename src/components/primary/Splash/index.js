import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors, fonts, assets } from '../../../utils';
import Gap from '../Gap';

export default function Splash({ navigation }) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Login');
  //   }, 3000);
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        {/* <Gap height={30} /> */}

        <FastImage
          source={{uri: assets.images.IMKabBlitar}}
          style={styles.logoKab}
        />
      </View>

      <View>
        <View animation="fadeInUpBig" style={{ alignItems: 'center' }}>
          <Text style={[styles.logoTextDark, { color: 'black' }]}>SI-PUMI</Text>
          <Text style={[styles.logoTextDark, { fontSize: 14 }]}>(SISTEM INFORMASI POTENSI USAHA MIKRO)</Text>
          <Text style={[styles.logoTextDark, { fontSize: 14 }]}>KABUPATEN BLITAR</Text>
        </View>

        <Gap height={30} />

        <FastImage
          source={{uri: assets.images.IMLogoo}}
          style={styles.logoBupati}
        />

        {/* <View animation="fadeInDownBig" style={{ alignItems: 'center' }}>
          <Text style={styles.logoTextDark}>AYO BELA BELI</Text>
          <Text style={styles.logoTextGreen}>PRODUK BLITAR</Text>
        </View> */}
      </View>

      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.textDinkop}>DINAS KOPERASI DAN USAHA MIKRO</Text>
          <Text style={styles.textDinkop}>KABUPATEN BLITAR</Text>
        </View>

        {/* <Gap height={30} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  logoTextDark: {
    color: colors.white,
    fontSize: 25,
    fontFamily: fonts.primary[800]
  },
  logoTextGreen: {
    color: colors.black,
    fontSize: 25,
    fontFamily: fonts.primary[800]
  },
  logoBupati: {
    width: 330,
    height: 290,
    alignSelf: 'center'
  },
  logoKab: {
    width: 83,
    height: 80
  },
  textDinkop: {
    color: colors.black,
    fontSize: 18,
    fontFamily: fonts.primary[700]
  }
});