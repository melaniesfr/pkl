import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function Register({ navigation }) {
  const [ data, setData ] = useState({
    nama: '',
    email: '',
    password: '',
    check_textNamaChange: false,
    check_textEmailChange: false,
    secureTextEntry: true
  });

  const onChangeNama = (value) => {
    if (value.length !== 0) {
      setData({
        ...data,
        nama: value,
        check_textNamaChange: true
      });
    } else {
      setData({
        ...data,
        nama: value,
        check_textNamaChange: false
      });
    }
  };

  const onChangeEmail = (value) => {
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        check_textEmailChange: true
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textEmailChange: false
      });
    }
  };

  const onChangePassword = (value) => {
    setData({
      ...data,
      password: value
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  };

  const userRegistration = () => {
    fetch('http://192.168.43.89/pkl/registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nama: data.nama,
        email: data.email,
        password: data.password
      })
    })
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson === 'User sudah ada, silakan coba lagi') {
        Alert.alert('Peringatan!', resJson);
      } else if (resJson === 'Registrasi berhasil') {
        Alert.alert('Success!', resJson);
      } else {
        Alert.alert('Error!', resJson);
      }
    })
    .catch((err) => console.log(err));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ position: 'relative', flex: 1, backgroundColor: '#ddd' }}>
        <View style={styles.container}>
          <View style={styles.boxRegister}>
            <Text style={styles.title}>REGISTER</Text>
            <View style={styles.input}>
              <Icon
                name={'person-outline'}
                size={20}
                style={{ marginTop: 13, marginRight: 5 }}
              />
              <TextInput
                placeholder="Nama"
                onChangeText={(value) => onChangeNama(value)}
              />
              { data.check_textNamaChange ?
              <Animatable.View animation="bounceIn" style={{ position: 'absolute', marginTop: 13, right: 5 }}>
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
              : null }
            </View>

            <View style={styles.input}>
              <Icon
                name={'mail-outline'}
                size={20}
                style={{ marginTop: 13, marginRight: 5 }}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(value) => onChangeEmail(value)}
              />
              { data.check_textEmailChange ?
              <Animatable.View animation="bounceIn" style={{ position: 'absolute', marginTop: 13, right: 5 }}>
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
              : null }
            </View>

            <View style={styles.input}>
              <Icon
                name={'key-outline'}
                size={20}
                style={{ marginTop: 11, marginRight: 5 }}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={ data.secureTextEntry }
                autoCapitalize="none"
                onChangeText={(value) => onChangePassword(value)}
              />
              <TouchableOpacity onPress={ updateSecureTextEntry } style={{ position: 'absolute', marginTop: 13, right: 5 }}>
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

            <TouchableOpacity style={styles.registerButton} onPress={ userRegistration }>
              <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
              <Icon
                name={'chevron-back-outline'}
                size={20}
                style={{ position: 'absolute', left: 100 }}
              />
              <Text style={styles.backText}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxRegister: {
    width: '80%',
    height: 350,
    backgroundColor: 'white',
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
    padding: 20,
    elevation: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    paddingLeft: 5,
    flexDirection: 'row'
  },
  registerButton: {
    marginTop: 10,
    width: '100%',
    height: 10,
    backgroundColor: '#2eb877',
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  registerText: {
    color: 'white',
    fontSize: 15
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
    position: 'relative'
  },
  backText: {
    textDecorationLine: 'underline',
    marginLeft: 18
  },
});