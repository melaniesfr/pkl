import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { colors, fonts } from '../../../utils';
import { ICStar } from '../../../assets';
import Gap from '../Gap';
import Review from '../Review';

export default function DetailUMKM({ data, onPressNavigation, onPressRate }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Animatable.View style={styles.top} animation={'bounceInDown'}>
          <Image
            source={{uri: `https://picsum.photos/900/600?random=${data.id}`}}
            style={{ flex: 1, width: '100%' }}
          />

          <TouchableOpacity style={styles.backButton} onPress={ onPressNavigation }>
            <Icon
              name={'chevron-back-circle'}
              size={45}
              color={colors.white}
              style={{ opacity: 0.5 }}
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

          <View>
            <Gap height={20} />
            <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: colors.green1, marginBottom: 20 }}>
              <Gap width={20} />
              <Text style={styles.review}>Reviews</Text>
            </View>
            {/* <Text style={{ textAlign: 'center', fontFamily: fonts.primary.normal, color: colors.dark1 }}>Belum ada review</Text> */}
            <Review />
            <Review />
            <Review />
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
    fontFamily: fonts.primary.normal
  },
  review: {
    fontSize: 17,
    color: colors.dark1,
    fontFamily: fonts.primary[600],
    marginBottom: 15
  }
});