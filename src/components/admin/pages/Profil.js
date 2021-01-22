import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import user from '../../../images/user.png';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { Alert } from 'react-native';

export default function Profil({ route, navigation }) {
  // const routes = useRoute();
  // const userEmail = JSON.parse(routes.params);
  // Alert.alert(userEmail);

  const [ data, setData ] = useState({
    nama: 'Melanie Safira',
    email: 'melanie@gmail.com',
    password: 'admin',
    secureTextEntry: true
  });

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
        <Image source={ user } style={styles.image} />

        <View style={styles.data}>
          <Text>{ data.nama }</Text>
          <Text>{ data.email }</Text>
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
                color="grey"
                size={20}
              />
              :
              <Feather
                name="eye"
                color="grey"
                size={20}
              /> }
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.button}>
            <Icon
              name={'create'}
              size={20}
              color={'white'}
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: 'white', fontSize: 15 }}>Edit</Text>
          </View>
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
    backgroundColor: 'white',
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
  button: {
    backgroundColor: '#4a94d9',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});