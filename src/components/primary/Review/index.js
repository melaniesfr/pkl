import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { ICProfile } from '../../../assets';
import { colors, fonts } from '../../../utils';
import axios from 'axios';

export default function Review({ data }) {
  const [ review, setReview ] = useState([]);
  
  const getData = () => {
    // axios.get('http://pkl-dinkop.000webhostapp.com/pkl/view.php')
    axios.get('http://192.168.43.89/pkl/reviews.php')
    .then((res) => {
      setReview(res.data);
    })
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    getData();
  }, []);

  const ReviewAda = () => {
    return (
      review.map((item, index) => {
        if (data.id === item.id_umkm) {
          return (
            <View key={ index }>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={ ICProfile } style={styles.avatar} />
                  <View style={{ marginVertical: 5 }}>
                    <Text style={styles.textNama}>{ item.nama_users }</Text>
                    <Text style={styles.textReview}>{ item.review }</Text>
                  </View>
                </View>
                <View style={{ marginTop: 5, marginRight: 5 }}>
                  <Text style={styles.textTanggal}>{ item.tanggal }</Text>
                </View>
              </View>
  
              <View style={styles.line}></View>
            </View>
          );
        }
      })
    );
  };

  const ReviewKosong = () => {
    return (
      <Text style={{ textAlign: 'center', fontFamily: fonts.primary.normal, color: colors.dark1 }}>
        Belum ada review
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <ReviewAda />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 40/2
  },
  line: {
    width: '100%',
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