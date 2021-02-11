import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, ScrollView, Linking, Platform } from 'react-native';
import { DetailUMKM, Gap } from '../../../primary';
import { colors, fonts } from '../../../../utils';

export default function DetailUMKMVisitor({ route, navigation }) {
  const { item } = route.params;

  const [ data, setData ] = useState({
    id: item.id,
    produk: item.produk,
    pemilik: item.pemilik,
    deskripsi: item.deskripsi,
    kategori: item.kategori,
    alamat: item.alamat,
    facebook: item.facebook,
    instagram: item.instagram,
    telp: item.telp,
    gambar: item.gambar
  });

  const dialCall = (telp) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${telp}`;
    } else {
      phoneNumber = `telprompt:${telp}`;
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <View>
      <ScrollView>
        <DetailUMKM
          item={ item }
          data={ data }
          onPressNavigation={() => navigation.goBack()}
          onPressRate={() => Alert.alert('Maaf!', 'Anda harus login terlebih dahulu.')}
        />

        <Gap height={35} />
      </ScrollView>

      <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', width: '100%', position: 'absolute', bottom: 0 }}>
        <TouchableOpacity
          onPress={() => dialCall(data.telp)}
          style={{ backgroundColor: colors.blue2, paddingVertical: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        >
          <Text style={{ fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' }}>Hubungi Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};