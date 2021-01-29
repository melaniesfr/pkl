import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../../utils';

export default function TentangVisitor() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tentang Page in Visitor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.dark1,
    fontFamily: fonts.primary.normal
  }
});