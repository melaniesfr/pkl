import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { IMLogo, IMKabBlitar } from '../../../assets';
import { colors, fonts } from '../../../utils';
import Gap from '../Gap';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Gap height={30} />

        <Image
          source={ IMKabBlitar }
          style={styles.logoKab}
        />
      </View>

      <View>
        <View animation="fadeInUpBig" style={{ alignItems: 'center' }}>
          <Text style={styles.logoTextDark}>USAHA MIKRO UNGGULAN</Text>
          <Text style={styles.logoTextGreen}>KABUPATEN BLITAR</Text>
        </View>

        <Image
          source={ IMLogo } style={styles.logoBupati}
          animation="bounceIn"
          duration={1500}
        />

        <View animation="fadeInDownBig" style={{ alignItems: 'center' }}>
          <Text style={styles.logoTextDark}>AYO BELA BELI</Text>
          <Text style={styles.logoTextGreen}>PRODUK BLITAR</Text>
        </View>
      </View>

      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.textDinkop}>DINAS KOPERASI DAN USAHA MIKRO</Text>
          <Text style={styles.textDinkop}>KABUPATEN BLITAR</Text>
        </View>

        <Gap height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoTextDark: {
    color: colors.green1,
    fontSize: 25,
    fontFamily: fonts.primary[800]
  },
  logoTextGreen: {
    color: colors.dark1,
    fontSize: 25,
    fontFamily: fonts.primary[800]
  },
  logoBupati: {
    width: 300,
    height: 300
  },
  logoKab: {
    width: 83,
    height: 80
  },
  textDinkop: {
    color: colors.dark1,
    fontSize: 18,
    fontFamily: fonts.primary[700]
  }
});