import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { IMUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Profil({ route, navigation, data, setData }) {
  // const routes = useRoute();
  // const userEmail = JSON.parse(routes.params);
  // Alert.alert(userEmail);

  // const [ user, setUser ] = useState([]);

  // axios.get('http://192.168.43.89/pkl/users.php')
  // .then((res) => {
  //   if (res.data.email === userEmail) {
  //     setData({
  //       nama: res.data.nama,
  //       email: res.data.email,
  //       password: res.data.password,
  //     });
  //   }
  // })
  // .catch((err) => console.log(err));

  // const loadData = () => {
  //   fetch('http://192.168.43.89/pkl/users.php', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       nama: data.nama,
  //       email: data.email,
  //       password: data.password
  //     })
  //   })
  //   .then((res) => res.json())
  //   .then((resJson) => {
  //     console.log(resJson.data.email);
  //     if (resJson.email === userEmail) {
  //       setData({
  //         nama: resJson.nama,
  //         email: resJson.email,
  //         password: resJson.password,
  //       });
  //     }
  //   })
  //   .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   loadData();
  // });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={ IMUser } style={styles.image} />

        <View style={styles.data}>
          <Text style={styles.textData}>{ data.nama }</Text>
          <Text style={styles.textData}>{ data.email }</Text>
          <View>
            <TextInput
              secureTextEntry={ data.secureTextEntry ? true : false }
              value={ data.password }
              editable={ false }
            />
            <TouchableOpacity onPress={ updateSecureTextEntry } style={{ position: 'absolute', marginTop: 13, right: 0 }}>
              { data.secureTextEntry ?
              <Feather
                name="eye-off"
                color={colors.grey}
                size={20}
              />
              :
              <Feather
                name="eye"
                color={colors.grey}
                size={20}
              /> }
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Icon
            name={'create'}
            size={20}
            color={colors.white}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.textButton}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    height: 385,
    width: '93%',
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 10,
    padding: 20
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20
  },
  data: {
    alignSelf: 'center'
  },
  textData: {
    color: colors.dark1,
    fontFamily: fonts.primary[600]
  },
  button: {
    backgroundColor: colors.blue1,
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.primary.normal
  }
});