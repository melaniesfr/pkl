import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, View, Image, TextInput, Text, StyleSheet, Keyboard, Modal, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import { IMUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function EditProfil() {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const [ data, setData ] = useState({
    id: '',
    nama: '',
    email: '',
    password: '',
    pwLama: '',
    pwBaru: '',
    konfPwBaru: '',
    isValidNama: true,
    isValidEmail: true,
    isValidPassword: true,
    isValidPwLama: true,
    isValidPwBaru: true,
    isValidKonfPwBaru: true,
    secureTextLama: true,
    secureTextBaru: true,
    secureTextKonfBaru: true
  });

  const [ users, setUsers ] = useState();
  const loadUsers = async() => {
    await AsyncStorage.getItem('email')
    .then((res) => {
      const email = String(res);
      setUsers(email);
    });

    axios.get('http://pkl-dinkop.000webhostapp.com/pkl/users.php')
    .then((res) => {
      for (var i=0; i<res.data.length; i++) {
        if (users === res.data[i].email) {
          setData({
            ...data,
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
    loadUsers();
  }, [users]);

  const onChangeNama = (value) => {
    if (value.trim().length >= 5) {
      setData({
        ...data,
        nama: value,
        isValidNama: true
      });
    } else {
      setData({
        ...data,
        nama: value,
        isValidNama: false
      });
    }
  };

  const onChangeEmail = (value) => {
    if (value.trim().length >= 10) {
      setData({
        ...data,
        email: value,
        isValidEmail: true
      });
    } else {
      setData({
        ...data,
        email: value,
        isValidEmail: false
      });
    }
  };

  const onChangePwLama = (value) => {
    if (value.trim().length >= 8) {
      setData({
        ...data,
        pwLama: value,
        isValidPwLama: true
      });
    } else {
      setData({
        ...data,
        pwLama: value,
        isValidPwLama: false
      });
    }
  };

  const onChangePwBaru = (value) => {
    if (value.trim().length >= 8) {
      setData({
        ...data,
        pwBaru: value,
        isValidPwBaru: true
      });
    } else {
      setData({
        ...data,
        pwBaru: value,
        isValidPwBaru: false
      });
    }
  };

  const onChangeKonfPwBaru = (value) => {
    if (value.trim().length >= 8) {
      setData({
        ...data,
        konfPwBaru: value,
        isValidKonfPwBaru: true
      });
    } else {
      setData({
        ...data,
        konfPwBaru: value,
        isValidKonfPwBaru: false
      });
    }
  };

  const updateSecureTextLama = () => {
    setData({
      ...data,
      secureTextLama: !data.secureTextLama
    });
  };

  const updateSecureTextBaru = () => {
    setData({
      ...data,
      secureTextBaru: !data.secureTextBaru
    });
  };

  const updateSecureTextKonfBaru = () => {
    setData({
      ...data,
      secureTextKonfBaru: !data.secureTextKonfBaru
    });
  };

  const editProfil = () => {
    setLoading(true);

    if (data.nama.length < 5 || data.email.length < 10) {
      setLoading(false);
      Alert.alert('Error!', 'Data nama atau email tidak memenuhi ketentuan.');
    } else if (data.nama.length >= 5 && data.email.length >= 10) {
      fetch('http://pkl-dinkop.000webhostapp.com/pkl/edit_profil.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: data.id,
          nama: data.nama,
          email: data.email
        })
      })
      .then((res) => res.json())
      .then((resJson) => {
        setLoading(false);

        if (resJson === 'Edit profil sukses.') {
          Alert.alert('Success!', resJson);
        } else {
          Alert.alert('Error!', resJson);
        }
      })
      .catch((err) => console.log(err));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} onPres>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={ true }
          visible={ modalVisible }
          onRequestClose={() => {
            Alert.alert('Peringatan!', 'Reset password ditutup.');
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ alignSelf: 'center', fontSize: 17, fontFamily: fonts.primary[700], color: colors.dark1 }}>Reset Password</Text>

              <View>
                <TextInput
                  placeholder={'Password lama'}
                  secureTextEntry={ data.secureTextLama }
                  autoCapitalize="none"
                  value={ data.pwLama }
                  onChangeText={(value) => onChangePwLama(value)}
                  style={styles.inputReset}
                />
                <TouchableOpacity onPress={ updateSecureTextLama } style={{ position: 'absolute', marginTop: 13, right: 5 }}>
                  { data.secureTextLama ?
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
              { data.isValidPwLama ? null :
              <Animatable.View animation={'fadeInLeft'} duration={500}>
                <Text style={styles.errorMsg}>Panjang minimal password 8 karakter.</Text>
              </Animatable.View> }

              <View>
                <TextInput
                  placeholder={'Password baru'}
                  secureTextEntry={ data.secureTextBaru }
                  autoCapitalize="none"
                  value={ data.pwBaru }
                  onChangeText={(value) => onChangePwBaru(value)}
                  style={styles.inputReset}
                />
                <TouchableOpacity onPress={ updateSecureTextBaru } style={{ position: 'absolute', marginTop: 13, right: 5 }}>
                  { data.secureTextBaru ?
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
              { data.isValidPwBaru ? null :
              <Animatable.View animation={'fadeInLeft'} duration={500}>
                <Text style={styles.errorMsg}>Panjang minimal password 8 karakter.</Text>
              </Animatable.View> }

              <View>
                <TextInput
                  placeholder={'Konfirmasi password baru'}
                  secureTextEntry={ data.secureTextKonfBaru }
                  autoCapitalize="none"
                  value={ data.konfPwBaru }
                  onChangeText={(value) => onChangeKonfPwBaru(value)}
                  style={[styles.inputReset, { marginBottom: 15 }]}
                />
                <TouchableOpacity onPress={ updateSecureTextKonfBaru } style={{ position: 'absolute', marginTop: 13, right: 5 }}>
                  { data.secureTextKonfBaru ?
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
              { data.isValidKonfPwBaru ? null :
              <Animatable.View animation={'fadeInLeft'} duration={500}>
                <Text style={styles.errorMsg}>Panjang minimal password 8 karakter.</Text>
              </Animatable.View> }

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{ color: colors.dark1, marginLeft: 10 }}>Batal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: colors.green1, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 5, elevation: 3, marginRight: 10 }}>
                  <Text style={{ color: colors.white }}>Simpan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* =============================================================================================== */}

        <View style={styles.card}>
          <Image source={ IMUser } style={styles.image} />

          <TextInput
            placeholder={'Nama'}
            value={ data.nama }
            onChangeText={(value) => onChangeNama(value)}
            style={styles.input}
          />
          { data.isValidNama ? null :
          <Animatable.View animation={'fadeInLeft'} duration={500}>
            <Text style={styles.errorMsg}>Panjang minimal nama 5 karakter.</Text>
          </Animatable.View> }

          <TextInput
            placeholder={'Email'}
            keyboardType="email-address"
            autoCapitalize="none"
            value={ data.email }
            onChangeText={(value) => onChangeEmail(value)}
            style={styles.input}
          />
          { data.isValidEmail ? null :
          <Animatable.View animation={'fadeInLeft'} duration={500}>
            <Text style={styles.errorMsg}>Panjang minimal email 10 karakter.</Text>
          </Animatable.View> }
          
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.textReset}>Reset Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={ editProfil }>
            <Icon
              name={'save-sharp'}
              size={15}
              color={colors.white}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.textButton}>{ loading ? 'Menyimpan...' : 'Simpan' }</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  card: {
    width: '93%',
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 10,
    padding: 20,
    marginTop: 20
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 5
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.grey2,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  },
  textReset: {
    fontFamily: fonts.primary[600],
    color: colors.dark1,
    fontSize: 13,
    marginLeft: 3,
    marginTop: 8,
    textDecorationLine: 'underline'
  },
  button: {
    backgroundColor: colors.green1,
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '85%'
  },
  inputReset: {
    borderBottomWidth: 1,
    borderBottomColor: colors.green1,
    marginTop: 5,
    padding: 5
  },
  errorMsg: {
    color: colors.red1,
    fontSize: 13,
    fontFamily: fonts.primary.normal,
    marginLeft: 5
  }
});