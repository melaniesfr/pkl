import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Pengaturan({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={{ position: 'relative', flexDirection: 'row', marginBottom: 10 }} onPress={() => navigation.navigate('BahasaAdmin')}>
          <Icon
            name={'language-outline'}
            size={23}
            style={{ position: 'relative', left: 0, marginRight: 10 }}
          />
          <Text style={styles.menu}>Bahasa</Text>
          <Icon
            name={'chevron-forward-outline'}
            size={25}
            style={{ position: 'absolute', right: 0 }}
          />
        </TouchableOpacity>

        <View style={styles.line}></View>

        <TouchableOpacity style={{ position: 'relative', flexDirection: 'row', marginTop: 10 }} onPress={() => navigation.navigate('TentangAdmin')}>
          <Icon
            name={'alert-circle-outline'}
            size={23}
            style={{ position: 'relative', left: 0, marginRight: 10 }}
          />
          <Text style={styles.menu}>Tentang Aplikasi</Text>
          <Icon
            name={'chevron-forward-outline'}
            size={25}
            style={{ position: 'absolute', right: 0 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Versi Aplikasi 0.0.1</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    elevation: 3
  },
  line: {
    width: '95%',
    height: 0.5,
    backgroundColor: '#ddd',
    marginVertical: 10,
    alignSelf: 'center'
  },
  menu: {
    fontSize: 18
  },
  footer: {
    width: '90%',
    marginTop: 20
  },
  footerText: {
    fontSize: 15,
    color: '#799cba',
    marginBottom: 10,
    marginLeft: 8
  },
  button: {
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 10,
    elevation: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#2eb877',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});