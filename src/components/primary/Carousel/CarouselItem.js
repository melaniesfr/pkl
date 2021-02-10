import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { colors, fonts } from '../../../utils';

const { width, height } = Dimensions.get('window');

export default function CarouselItem({ item }) {
  return (
    <View style={styles.cardView}>
      <Image source={{uri: item.url}} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{ item.title }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 4,
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5
  },
  image: {
    width: width - 20,
    height: height / 4,
    borderRadius: 10
  },
  itemTitle: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    shadowColor: colors.black,
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5
  }
});