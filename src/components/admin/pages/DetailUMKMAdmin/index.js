import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../../utils';
import { DetailUMKM } from '../../../primary';

export default function DetailUMKMAdmin({ route, navigation }) {
  const { item } = route.params;
  const [ kate, setKate ] = useState('');

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

  const ubahKategori = () => {
    if (data.kategori === 'Fashion') {
      setKate(1);
    } else if (data.kategori === 'Kerajinan') {
      setKate(2);
    } else if (data.kategori === 'Kuliner') {
      setKate(3);
    } else if (data.kategori === 'Makanan Olahan') {
      setKate(4);
    } else if (data.kategori === 'Minuman Olahan') {
      setKate(5);
    }
  };

  useEffect(() => {
    ubahKategori();
  }, []);

  const deleteData = () => {
    fetch('http://192.168.43.89/pkl/delete_umkm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: data.id
      })
    })
    .then((res) => res.json())
    .then((resJson) => {
      Alert.alert('Success!', 'Hapus UMKM berhasil.')
      navigation.navigate('BerandaAdmin');
    })
    .catch((err) => console.log(err));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DetailUMKM
        item={ item }
        data={ data }
        onPressNavigation={() => navigation.goBack()}
        onPressRate={() => Alert.alert('Maaf!', 'Admin tidak dapat memberikan review.')}
      />

      <Animatable.View
        style={styles.footer}
        animation={'fadeInUpBig'}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateUMKMAdmin', { id: data.id, produk: data.produk, pemilik: data.pemilik, deskripsi: data.deskripsi, kategori: kate, alamat: data.alamat, facebook: data.facebook, instagram: data.instagram, telp: data.telp, gambar: data.gambar, })}
          style={styles.editButton}
        >
          <Icon
            name={'create'}
            size={15}
            color={colors.white}
            style={{ marginRight: 5, marginTop: 3 }}
          />
          <Text style={{ color: colors.white, fontSize: 15 }}>Ubah</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert(
            'Peringatan!',
            'Anda yakin akan menghapus UMKM ini?',
            [
              {text: 'Tidak', onPress: () => console.log('Button tidak clicked')},
              {text: 'Ya', onPress: () => deleteData()}
            ]
          )}
          style={styles.deleteButton}
        >
          <Icon
            name={'trash'}
            size={15}
            color={colors.white}
            style={{ marginRight: 5, marginTop: 3 }}
          />
          <Text style={{ color: colors.white, fontSize: 15 }}>Hapus</Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  editButton: {
    backgroundColor: colors.blue1,
    width: '48%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  deleteButton: {
    backgroundColor: colors.red,
    width: '48%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 3
  }
});