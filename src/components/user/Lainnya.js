import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Lainnya({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('LanguageUser')} style={styles.button}>
          <Text style={styles.menu}>Bahasa</Text>
          <Icon
            name={'chevron-forward-outline'}
            size={25}
            style={{ position: 'absolute', right: 10 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUser')} style={styles.button}>
          <Text style={styles.menu}>Tentang Aplikasi</Text>
          <Icon
            name={'chevron-forward-outline'}
            size={25}
            style={{ position: 'absolute', right: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  card: {
    height: 50,
    width: '93%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    padding: 10,
    marginTop: 20,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  menu: {
    fontSize: 18
  },
  button: {
    flexDirection: 'row'
  }
});