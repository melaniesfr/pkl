import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import axios from 'axios';

export default function DetailPerKategori({ item, renderItem }) {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={ data }
        renderItem={ renderItem }
        keyExtractor={ (item) => item.id }
        horizontal={ false }
        numColumns={ 2 }
        showsVerticalScrollIndicator={ false }
        style={{ marginVertical: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});