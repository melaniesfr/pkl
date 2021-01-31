import React, { useState } from 'react';
import { Alert } from 'react-native';
import { DetailUMKM } from '../../../primary';

export default function DetailKategoriUser({ route, navigation }) {
  const { item } = route.params;

  const [ data, setData ] = useState({
    id: item.id,
    produk: item.produk,
    pemilik: item.pemilik,
    deskripsi: item.deskripsi,
    kategori: item.kategori,
    desa: item.desa,
    kecamatan: item.kecamatan,
    telp: item.telp
  });

  return (
    <DetailUMKM
      item={ item }
      data={ data }
      onPressNavigation={() => navigation.goBack()}
      onPressRate={() => Alert.alert('Success!', 'Silakan tambahkan review di sini.')}
    />
  );
};