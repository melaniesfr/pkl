import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './../images/logo.png';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={ logo } style={styles.logo} />
      <Text style={styles.logoTextTop}>USAHA MIKRO UNGGULAN</Text>
      <Text style={styles.logoTextBottom}>KABUPATEN BLITAR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoTextTop: {
    color: 'red',
    fontSize: 25,
    fontWeight: '700'
  },
  logoTextBottom: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700'
  },
  logo: {
    width: 300,
    height: 300
  }
});