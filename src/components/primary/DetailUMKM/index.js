import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Linking, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { colors, fonts } from '../../../utils';
import { ICStar } from '../../../assets';
import Gap from '../Gap';
import Review from '../Review';

export default function DetailUMKM({ data, onPressNavigation, onPressRate }) {
  const GambarProduk = () => {
    if (data.gambar !== '') {
      return (
        <Image
          source={{uri: `http://192.168.43.89/pkl/images/${data.gambar}`}}
          style={{ flex: 1, width: '100%' }}
        />
      );
    } else {
      return (
        <Image
          source={{uri: 'https://via.placeholder.com/900x600?text=UMKM+Blitar+-+DINKOP'}}
          style={{ flex: 1, width: '100%' }}
        />
      );
    }
  };

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Animatable.View style={styles.top} animation={'bounceInDown'}>
          <GambarProduk />

          <TouchableOpacity style={styles.backButton} onPress={ onPressNavigation }>
            <Icon
              name={'chevron-back-circle'}
              size={45}
              color={colors.white}
              style={{ opacity: 0.8 }}
            />
          </TouchableOpacity>
        </Animatable.View>

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

            <TouchableOpacity style={styles.rate} onPress={ onPressRate }>
              <Image source={ ICStar } style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
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
              <Text style={styles.informationTitle}>Produk</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.informationData, { width: '50%'}]}>1. Nama Produk</Text>
                <Text style={[styles.informationTitle, { fontSize: 14 }]}>: Rp Harga</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.informationData, { width: '50%'}]}>2. Nama Produk</Text>
                <Text style={[styles.informationTitle, { fontSize: 14 }]}>: Rp Harga</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.informationData, { width: '50%'}]}>3. Nama Produk</Text>
                <Text style={[styles.informationTitle, { fontSize: 14 }]}>: Rp Harga</Text>
              </View>
            </View>

            <View style={{ marginTop: 8 }}>
              <Text style={styles.informationTitle}>Alamat</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.informationData}>{ data.alamat }</Text>
                <TouchableOpacity style={{ backgroundColor: colors.grey4, paddingHorizontal: 6, paddingVertical: 5, borderRadius: 50 }}>
                  <Icon
                    name={'location-sharp'}
                    size={20}
                    color={colors.grey5}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 8 }}>
              <Text style={styles.informationTitle}>No. Telp / WA</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.informationData}>{ data.telp }</Text>
                <TouchableOpacity onPress={() => dialCall(data.telp)}>
                  <Text style={{ fontSize: 12, fontFamily: fonts.primary.normal, color: colors.dark2 }}>Hubungi Sekarang?</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{ marginTop: 8 }}>
              <Text style={styles.informationTitle}>Sosial Media</Text>

              <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <View style={{ flexDirection: 'row', width: '28%' }}>
                  <Icon
                    name={'logo-facebook'}
                    size={18}
                    color={colors.white}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.informationData}>Facebook</Text>
                </View>
                <Text style={[styles.informationTitle, { fontSize: 14 }]}>: { data.facebook }</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <View style={{ flexDirection: 'row', width: '28%' }}>
                  <Icon
                    name={'logo-instagram'}
                    size={18}
                    color={colors.white}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.informationData}>Instagram</Text>
                </View>
                <Text style={[styles.informationTitle, { fontSize: 14 }]}>: { data.instagram }</Text>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: colors.grey6 }}>
            <Gap height={20} />
            
            <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: colors.green1, marginBottom: 20 }}>
              <Gap width={20} />
              <Text style={styles.review}>Gambar Produk</Text>
            </View>

            <ScrollView horizontal>
              <Gap width={20} />

              <View style={{ width: 150, height: 100, backgroundColor: 'red', marginRight: 10, borderRadius: 5 }}></View>
              <View style={{ width: 150, height: 100, backgroundColor: 'green', marginRight: 10, borderRadius: 5 }}></View>
              <View style={{ width: 150, height: 100, backgroundColor: 'blue', marginRight: 10, borderRadius: 5 }}></View>
              <Gap width={10} />
            </ScrollView>

            <Gap height={20} />
          </View>

          <View>
            <Gap height={20} />
            <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: colors.green1, marginBottom: 20 }}>
              <Gap width={20} />
              <Text style={styles.review}>Reviews</Text>
            </View>

            <Review data={ data } />
            
            <Gap height={20} />
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
    borderTopRightRadius: 30
  },
  rate: {
    backgroundColor: colors.green1,
    width: 60, height: 60,
    borderRadius: 60/2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 25,
    right: 25
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
    fontFamily: fonts.primary.normal,
    maxWidth: '90%'
  },
  review: {
    fontSize: 17,
    color: colors.dark1,
    fontFamily: fonts.primary[600],
    marginBottom: 15
  }
});