import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ICProfile } from '../../../assets';
import { colors, fonts } from '../../../utils';
import axios from 'axios';

export default function Review({ data, navigation }) {
  const [ review, setReview ] = useState([]);
  const [ reviews, setReviews ] = useState([]);
  const [ selected, setSelected ] = useState();
  
  const getData = () => {
    axios.get('http://192.168.43.89/pkl/reviews.php')
    .then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].id_umkm === data.id) {
          setReview(res.data[i]);
        }
      }
    })
    .catch((err) => console.log(err))
  };

  const getReviews = () => {
    axios.get('http://192.168.43.89/pkl/reviews.php')
    .then((res) => {
      setReviews(res.data);
    })
    .catch((err) => console.log(err))
  };

  const [ user, setUser ] = useState({
    id: '',
    nama: '',
    email: '',
    password: ''
  });

  const [ users, setUsers ] = useState();
  const [ token, setToken ] = useState();
  const loadUsers = async() => {
    await AsyncStorage.getItem('email')
    .then((res) => {
      const email = String(res);
      setUsers(email);
    });

    await AsyncStorage.getItem('userToken')
    .then((res) => {
      const tokens = String(res);
      setToken(tokens);
    });

    axios.get('http://192.168.43.89/pkl/users.php')
    .then((res) => {
      for (var i=0; i<res.data.length; i++) {
        if (users === res.data[i].email) {
          setUser({
            ...user,
            id: res.data[i].id,
            nama: res.data[i].nama,
            email: res.data[i].email,
            password: res.data[i].password
          });
        }
      }
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    getReviews();
    loadUsers();
  }, [users]);

  const deleteReview = () => {
    fetch('http://192.168.43.89/pkl/delete_review.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: selected
      })
    })
    .then((res) => res.json())
    .then((resJson) => {
      Alert.alert('Success!', 'Hapus review berhasil.');
      getData();
      getReviews();
    })
    .catch((err) => console.log(err));
  };

  const ReviewAda = () => {
    return (
      reviews.map((item, index) => {
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
                
                <View style={{ marginTop: 5, marginRight: 5, justifyContent: 'center' }}>
                  <Text style={[styles.textTanggal, { marginBottom: 5 }]}>{ item.tanggal }</Text>

                  { (user.nama === item.nama_users && token === 'userToken')
                    ? (
                      <TouchableOpacity style={{ paddingVertical: 3, paddingHorizontal: 10, backgroundColor: colors.red, borderRadius: 5 }} onPress={ setSelected(item.id), deleteReview }>
                        <Text style={{ fontFamily: fonts.primary.normal, color: colors.white }}>Hapus</Text>
                      </TouchableOpacity>
                    )
                    : null }
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
      { review.length !== 0 ? <ReviewAda /> : <ReviewKosong /> }
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