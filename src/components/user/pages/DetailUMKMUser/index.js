import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { DetailUMKM } from '../../../primary';
import { colors, fonts } from '../../../../utils';

export default function DetailUMKMUser({ route, navigation }) {
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

  const [ modalVisible, setModalVisible ] = useState(false);

  return (
    <View>
      <Modal
        animationType={'slide'}
        transparent={ true }
        visible={ modalVisible }
        onRequestClose={() => {
          Alert.alert('Peringatan!', 'Review ditutup.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ alignSelf: 'center', fontSize: 17, fontFamily: fonts.primary[700], color: colors.dark1 }}>{ data.produk }</Text>
            <TextInput
              placeholder={'Review Anda...'}
              multiline
              style={{ borderBottomWidth: 1, borderBottomColor: colors.green1, marginTop: 10, marginBottom: 15, padding: 5 }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ color: colors.dark1, marginLeft: 10 }}>Batal</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                  <Text style={{ marginRight: 20, color: colors.red }}>Hapus</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: colors.green1, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 5, elevation: 3, marginRight: 10 }}>
                  <Text style={{ color: colors.white }}>Simpan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <DetailUMKM
        item={ item }
        data={ data }
        onPressNavigation={() => navigation.goBack()}
        onPressRate={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '85%'
  }
});