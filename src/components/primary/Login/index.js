import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { colors, fonts } from '../../../utils';
import md5 from 'md5';
import AuthContext from '../Auth';
import axios from 'axios';

export default function Login({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

  const [ pass, setPass ] = useState('');
  const [ users, setUsers ] = useState();

  const [ data, setData ] = useState({
    email: '',
    password: '',
    check_textEmailChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true
  });

  const onChangeEmail = (value) => {
    if (value.trim().length >= 4) {
      setData({
        ...data,
        email: value,
        check_textEmailChange: true,
        isValidEmail: true
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textEmailChange: false,
        isValidEmail: false
      });
    }
  };

  const onChangePassword = () => {
    let encodePass = md5(pass);

    if (pass.length >= 8) {
      setData({
        ...data,
        password: encodePass,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: encodePass,
        isValidPassword: false
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  };

  const loginHandle = (email, password) => {
    const foundUser = (users || []).filter(item => {
      return (email === item.email && password === item.password);
    });

    if (data.email.length === 0 || data.password.length === 0) {
      Alert.alert('Error!', 'Kolom email atau password tidak boleh kosong.');
      return;
    } if (foundUser.length === 0) {
      Alert.alert('Maaf!', 'Data yang dimasukkan tidak cocok.');
      return;
    }

    signIn(foundUser);

    setData({
      ...data,
      email: '',
      password: '',
      check_textEmailChange: false
    });
  };

  useEffect(() => {
    axios.get('http://pkl-dinkop.000webhostapp.com/pkl/test_login.php')
    .then((res) => {
      setUsers(res.data);
    })
    .catch((err) => console.log(err));
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.boxLogin}>
            <Text style={styles.title}>LOGIN</Text>
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
                value={ data.email }
                onChangeText={(value) => onChangeEmail(value)}
              />
              { data.check_textEmailChange ?
              <Animatable.View animation="bounceIn" style={{ position: 'absolute', marginTop: 13, right: 5 }}>
                <Feather
                  name="check-circle"
                  color={colors.green}
                  size={20}
                />
              </Animatable.View>
              : null }
            </View>

            { data.isValidEmail ? null :
            <Animatable.View animation={'fadeInLeft'} duration={500}>
              <Text style={styles.errorMsg}>Panjang minimal email 4 karakter.</Text>
            </Animatable.View>
            }

            <View style={styles.input}>
              <Icon
                name={'key-outline'}
                size={20}
                style={{ marginTop: 11, marginRight: 5 }}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={ data.secureTextEntry ? true : false }
                autoCapitalize="none"
                value={ pass }
                onChangeText={(pass) => setPass(pass)}
                onEndEditing={() => onChangePassword()}
              />
              <TouchableOpacity onPress={ updateSecureTextEntry } style={{ position: 'absolute', marginTop: 13, right: 5 }}>
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

            { data.isValidPassword ? null :
            <Animatable.View animation={'fadeInLeft'} duration={500}>
              <Text style={styles.errorMsg}>Panjang minimal password 8 karakter.</Text>
            </Animatable.View>
            }

            <TouchableOpacity style={styles.loginButton} onPress={() => loginHandle(data.email, data.password)}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerText}>Buat Akun</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ position: 'absolute', right: 20, bottom: 20 }}>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('VisitorScreen')}>
            <Text style={styles.nextText}>Lewati</Text>
            <Icon
              name={'chevron-forward-circle-outline'}
              size={20}
              color={colors.white}
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.grey1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxLogin: {
    width: '90%',
    backgroundColor: colors.white,
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
    padding: 20,
    elevation: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    fontFamily: fonts.primary[800],
    color: colors.dark1
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    marginBottom: 10,
    paddingLeft: 5,
    flexDirection: 'row'
  },
  loginButton: {
    marginTop: 10,
    width: '100%',
    padding: 12,
    backgroundColor: colors.blue1,
    borderRadius: 50,
    elevation: 5
  },
  loginText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.primary[600],
    alignSelf: 'center',
    justifyContent: 'center'
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center'
  },
  registerText: {
    textDecorationLine: 'underline',
    fontFamily: fonts.primary.normal,
    color: colors.dark1
  },
  nextButton: {
    backgroundColor: colors.green1,
    padding: 10,
    borderRadius: 5,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 5
  },
  nextText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.primary[600]
  },
  errorMsg: {
    color: colors.red1,
    fontSize: 13,
    fontFamily: fonts.primary.normal,
    marginLeft: 5
  }
});