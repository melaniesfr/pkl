import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IMLogo } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={{ alignItems: 'center' }}>
        <Text style={styles.logoTextTop}>USAHA MIKRO UNGGULAN</Text>
        <Text style={styles.logoTextBottom}>KABUPATEN BLITAR</Text>
      </Animatable.View>

      <Animatable.Image
        source={ IMLogo } style={styles.logo}
        animation="bounceIn"
        duration={1500}
      />

      <Animatable.View animation="fadeInDownBig" style={{ alignItems: 'center' }}>
        <Text style={styles.logoTextBottom}>AYO BELA BELI</Text>
        <Text style={styles.logoTextTop}>PRODUK BLITAR</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoTextTop: {
    color: colors.green1,
    fontSize: 25,
    fontFamily: fonts.primary[800]
  },
  logoTextBottom: {
    color: colors.dark1,
    fontSize: 25,
    fontFamily: fonts.primary[800]
  },
  logo: {
    width: 300,
    height: 300
  }
});