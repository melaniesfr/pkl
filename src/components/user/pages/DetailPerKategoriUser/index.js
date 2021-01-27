import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import axios from 'axios';

export default function DetailPerKategoriUser({ route, navigation }) {
  const { item } = route.params;

  const [ data, setData ] = useState([]);

  const getData = () => {
    // axios.get('http://192.168.43.89/pkl/view.php')
    axios.get('http://pkl-dinkop.000webhostapp.com/pkl/view_kategori.php')
    .then((res) => {
      for (var i=0; i < res.data.length; i++) {
        if (item.kategori === res.data[i].kategori) {
          setData(data => [...data, res.data[i]]);
        }
      }
    })
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailKategoriUser', { item: item })}>
        <View style={{ margin: 5, position: 'relative' }}>
          <Image source={{uri: `https://picsum.photos/900/600?random=${item.id}`}} style={styles.image} />

          <View style={{ position: 'absolute', bottom: 0, height: 27, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <View style={{ position: 'absolute', bottom: 5, left: 5 }}>
              <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>{ item.produk }</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ data }
        renderItem={ renderItem }
        keyExtractor={ (item) => item.id }
        horizontal={ false }
        numColumns={ 2 }
        style={{ marginTop: 8, marginBottom: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: (Dimensions.get('window').width / 2) - 15,
    height: (Dimensions.get('window').height / 6),
    borderRadius: 5
  }
});