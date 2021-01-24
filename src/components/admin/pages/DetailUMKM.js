import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

export default function DetailUMKM({ route, navigation }) {
  const { item } = route.params;

  const [data, setData] = useState({
    id: item.id,
    produk: item.produk,
    pemilik: item.pemilik,
    deskripsi: item.deskripsi,
    desa: item.desa,
    kecamatan: item.kecamatan,
    telp: item.telp
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Animatable.Image
            source={{uri: `https://picsum.photos/900/600?random=${data.id}`}}
            style={{ flex: 1, width: '100%' }}
            animation={'bounceInDown'}
          />

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('BerandaAdmin')}>
            <Icon
              name={'chevron-back-circle-outline'}
              size={45}
              color={'white'}
            />
          </TouchableOpacity>
        </View>

        <Animatable.View
          style={styles.bottom}
          animation={'fadeInUpBig'}
        >
          <View style={styles.title}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ data.produk }</Text>

            <View style={{ marginTop: 20 }}>
              <Text style={{ color: '#2eb877', fontSize: 17, marginBottom: 5 }}>Pemilik</Text>
              <Text style={{ fontSize: 15 }}>{ data.pemilik }</Text>
            </View>
          </View>

          <View style={styles.information}>
            <Text style={styles.informationText}>Informasi</Text>

            <View>
              <Text style={styles.informationTitle}>Deskripsi</Text>
              <Text style={styles.informationData}>{ data.deskripsi }</Text>
            </View>

            <View style={{ marginTop: 8 }}>
              <Text style={styles.informationTitle}>Alamat</Text>
              <Text style={styles.informationData}>Desa { data.desa }, Kecamatan { data.kecamatan }</Text>
            </View>

            <View style={{ marginTop: 8 }}>
              <Text style={styles.informationTitle}>No. Telp / WA</Text>
              <Text style={styles.informationData}>{ data.telp }</Text>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View
          style={styles.footer}
          animation={'fadeInUpBig'}
        >
          <TouchableOpacity style={styles.editButton}>
              <Icon
                name={'create'}
                size={15}
                color={'white'}
                style={{ marginRight: 5, marginTop: 3 }}
              />
            <Text style={{ color: 'white', fontSize: 15 }}>Ubah</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton}>
              <Icon
                name={'trash'}
                size={15}
                color={'white'}
                style={{ marginRight: 5, marginTop: 3 }}
              />
            <Text style={{ color: 'white', fontSize: 15 }}>Hapus</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: 250
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10
  },
  bottom: {
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    // height: 1000,
    elevation: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  information: {
    padding: 20,
    backgroundColor: '#2eb877'
  },
  informationText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 15
  },
  informationTitle: {
    color: '#454545',
    fontSize: 15,
    fontStyle: 'italic',
  },
  informationData: {
    color: 'white'
  },
  footer: {
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  editButton: {
    backgroundColor: '#4a94d9',
    width: '48%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  deleteButton: {
    backgroundColor: 'red',
    width: '48%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});