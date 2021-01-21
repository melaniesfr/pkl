import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import logo from './../images/logo.png';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.Image
        source={ logo } style={styles.logo}
        animation="bounceIn"
        duration={1500}
      />

      <Animatable.View animation="fadeInUpBig" style={{ alignItems: 'center' }}>
        <Text style={styles.logoTextTop}>USAHA MIKRO UNGGULAN</Text>
        <Text style={styles.logoTextBottom}>KABUPATEN BLITAR</Text>
      </Animatable.View>
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