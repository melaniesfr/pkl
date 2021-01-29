import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { colors, fonts } from '../../../../utils';

export default function DetailUMKMVisitor({ route, navigation }) {
  const { item } = route.params;

  const [data, setData] = useState({
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Animatable.Image
            source={{uri: `https://picsum.photos/900/600?random=${data.id}`}}
            style={{ flex: 1, width: '100%' }}
            animation={'bounceInDown'}
          />

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon
              name={'chevron-back-circle'}
              size={45}
              color={colors.white}
              style={{ opacity: 0.5 }}
            />
          </TouchableOpacity>
        </View>

        <Animatable.View
          style={styles.bottom}
          animation={'fadeInUpBig'}
        >
          <View style={styles.title}>
            <Text style={{ fontSize: 20, fontFamily: fonts.primary[800], color: colors.dark1 }}>{ data.produk }</Text>

            <View style={{ marginTop: 20 }}>
              <Text style={{ color: colors.green1, fontSize: 17, marginBottom: 5, fontFamily: fonts.primary[600] }}>Pemilik</Text>
              <Text style={{ fontSize: 15, fontFamily: fonts.primary.normal, color: colors.dark1 }}>{ data.pemilik }</Text>
            </View>
          </View>

          <View style={styles.information}>
            <Text style={styles.informationText}>Informasi</Text>

            <View>
              <Text style={styles.informationTitle}>Deskripsi</Text>
              <Text style={styles.informationData}>{ data.deskripsi }</Text>
            </View>

            <View style={{ marginTop: 8 }}>
              <Text style={styles.informationTitle}>Kategori</Text>
              <Text style={styles.informationData}>{ data.kategori }</Text>
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
                  color={colors.white}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.informationData}>Facebook</Text>
                <Text style={{ color: colors.dark2, marginLeft: 8, fontFamily: fonts.primary.normal }}>: Nama Facebook</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <Icon
                  name={'logo-instagram'}
                  size={18}
                  color={colors.white}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.informationData}>Instagram</Text>
                <Text style={{ color: colors.dark2, marginLeft: 5, fontFamily: fonts.primary.normal }}>: Nama Instagram</Text>
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
    marginBottom: 20,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    elevation: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  title: {
    padding: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  information: {
    padding: 20,
    backgroundColor: colors.green1
  },
  informationText: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 15,
    fontFamily: fonts.primary[600]
  },
  informationTitle: {
    color: colors.dark2,
    fontSize: 15,
    fontFamily: fonts.primary.normal
  },
  informationData: {
    color: colors.white,
    fontFamily: fonts.primary.normal
  }
});