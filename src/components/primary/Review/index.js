import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ICProfile } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Review() {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ ICProfile } style={styles.avatar} />
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.textNama}>Nama</Text>
            <Text style={styles.textReview}>Isi review</Text>
          </View>
        </View>
        <View style={{ marginTop: 5, marginRight: 5 }}>
          <Text style={styles.textTanggal}>Tanggal</Text>
        </View>
      </View>

      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row', justifyContent: 'space-between'
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 40/2
  },
  line: {
    width: '90%',
    height: 0.5,
    backgroundColor: colors.grey1,
    marginVertical: 10,
    alignSelf: 'center'
  },
  textNama: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.dark1
  },
  textReview: {
    fontSize: 13,
    fontFamily: fonts.primary.normal,
    color: colors.dark1
  },
  textTanggal: {
    fontSize: 10,
    fontFamily: fonts.primary[300],
    color: colors.grey
  }
});