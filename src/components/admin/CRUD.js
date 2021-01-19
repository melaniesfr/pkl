import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default function CRUD({ navigation }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);

    axios.get('http://192.168.43.89/pkl/view.php')
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setIsLoading(false);
    })
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailUMKMAdmin')}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 5, marginVertical: 10, flexDirection: 'row' }}>
          <Image source={{uri: `https://picsum.photos/900/600?random=${item.id}`}} style={{ width: 100, height: 67 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{ item.produk }</Text>
            <Text style={{ fontSize: 15 }}>{ item.pemilik }</Text>
            <Text style={{ fontSize: 13 }}>{ item.deskripsi }</Text>
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
        refreshing={ isLoading }
        onRefresh={ getData }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10
  }
});