import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { IMUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Profil({ data, setData }) {
  const [ encrypt, setEncrypt ] = useState({
    secureTextEntry: true
  });

  const updateSecureTextEntry = () => {
    setEncrypt({
      ...encrypt,
      secureTextEntry: !encrypt.secureTextEntry
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={ IMUser } style={styles.image} />

        <View style={styles.data}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textInfo, { marginRight: 32 }]}>Nama</Text>
            <Text style={[styles.textInfo, { marginRight: 5 }]}>:</Text>
            <Text style={styles.textData}>{ data.nama }</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textInfo, { marginRight: 34 }]}>Email</Text>
            <Text style={[styles.textInfo, { marginRight: 5 }]}>:</Text>
            <Text>{ data.email }</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textInfo, { marginRight: 5 }]}>Password</Text>
            <Text style={[styles.textInfo, { marginRight: 5 }]}>:</Text>
          </View>
          <View>
            <TextInput
              secureTextEntry={ encrypt.secureTextEntry ? true : false }
              value={ data.password }
              editable={ false }
            />
            <TouchableOpacity onPress={ updateSecureTextEntry } style={{ position: 'absolute', marginTop: 13, right: 0 }}>
              { encrypt.secureTextEntry ?
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
    paddingHorizontal: 20
  },
  textInfo: {
    color: colors.dark1,
    fontFamily: fonts.primary[700]
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