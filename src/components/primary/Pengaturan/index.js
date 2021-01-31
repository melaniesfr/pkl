import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from '../../../utils';

export default function Pengaturan({ navigation, onPressBahasa, onPressTentang, onPressTitle, title }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={ onPressBahasa } style={{ position: 'relative', flexDirection: 'row', marginBottom: 10 }}>
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

        <TouchableOpacity onPress={ onPressTentang } style={{ position: 'relative', flexDirection: 'row', marginTop: 10 }}>
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
        <TouchableOpacity onPress={ onPressTitle } style={styles.button}>
          <Text style={styles.buttonText}>{ title }</Text>
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
    backgroundColor: colors.white,
    marginTop: 20,
    padding: 20,
    elevation: 3
  },
  line: {
    width: '95%',
    height: 0.5,
    backgroundColor: colors.grey1,
    marginVertical: 10,
    alignSelf: 'center'
  },
  menu: {
    fontSize: 18,
    fontFamily: fonts.primary.normal
  },
  footer: {
    width: '90%',
    marginTop: 20
  },
  footerText: {
    fontSize: 15,
    color: colors.blue2,
    marginBottom: 10,
    marginLeft: 8,
    fontFamily: fonts.primary.normal
  },
  button: {
    backgroundColor: colors.white,
    padding: 13,
    borderRadius: 10,
    elevation: 5
  },
  buttonText: {
    fontSize: 18,
    color: colors.green1,
    textAlign: 'center',
    fontFamily: fonts.primary[800]
  }
});