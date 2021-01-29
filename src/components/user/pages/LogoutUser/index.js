import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../../utils';

export default function LogoutUser() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logout Page in User</Text>
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