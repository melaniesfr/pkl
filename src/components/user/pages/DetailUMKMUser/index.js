import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

export default function DetailUMKMUser({ route, navigation }) {
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

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('BerandaUser')}>
            <Icon
              name={'chevron-back-circle'}
              size={45}
              color={'white'}
              style={{ opacity: 0.5 }}
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

            <View style={{ marginTop: 8 }}>
              <Text style={styles.informationTitle}>Harga</Text>
              <Text style={styles.informationData}>Rp harga</Text>
            </View>
            
            <View style={{ marginTop: 8 }}>
              <Text style={styles.informationTitle}>Sosial Media</Text>

              <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <Icon
                  name={'logo-facebook'}
                  size={18}
                  color={'white'}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.informationData}>Facebook</Text>
                <Text style={{ color: '#454545', marginLeft: 8 }}>: Nama Facebook</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <Icon
                  name={'logo-instagram'}
                  size={18}
                  color={'white'}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.informationData}>Instagram</Text>
                <Text style={{ color: '#454545', marginLeft: 5 }}>: Nama Instagram</Text>
              </View>
            </View>
          </View>
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
  }
});