import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { colors, fonts } from '../../../utils';

export default function Login({ navigation }) {
  const [ data, setData ] = useState({
    email: '',
    password: '',
    check_textEmailChange: false,
    secureTextEntry: true
  });

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

  const userLogin = () => {
    // fetch('http://192.168.43.89/pkl/login.php', {
    fetch('http://pkl-dinkop.000webhostapp.com/pkl/login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson === 'Data admin cocok') {
        navigation.navigate('AdminScreen', {
          screen: 'ProfilAdmin',
          params: { email: data.email }
        });
      } else if (resJson === 'Data user cocok') {
        navigation.navigate('UserScreen', {
          screen: 'ProfilUser',
          params: { email: data.email }
        });
      } else {
        Alert.alert('Error!', resJson);
      }

      setData({
        ...data,
        email: '',
        password: '',
        check_textEmailChange: false
      });
    })
    .catch((err) => console.log(err));
  };

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
                value={ data.password }
                onChangeText={(value) => onChangePassword(value)}
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

            <TouchableOpacity style={styles.loginButton} onPress={ userLogin }>
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
    position: 'relative',
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
    height: 290,
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
    height: 10,
    backgroundColor: colors.blue1,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  loginText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.primary[600]
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
  }
});