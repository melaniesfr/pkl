import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions, StatusBar } from 'react-native';
import axios from 'axios';

export default function BerandaVisitor({ navigation }) {
  const [ data, setData ] = useState();
  const [ isLoading, setIsLoading ] = useState(false);

  const getData = () => {
    setIsLoading(true);

    // axios.get('http://192.168.43.89/pkl/view.php')
    axios.get('http://pkl-dinkop.000webhostapp.com/pkl/view.php')
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
      <TouchableOpacity onPress={() => navigation.navigate('DetailUMKMVisitor', { item: item })}>
        <View style={{ margin: 5, position: 'relative' }}>
          <Image source={{uri: `https://picsum.photos/900/600?random=${item.id}`}} style={styles.image} />

          <View style={{ position: 'absolute', bottom: 0, height: 25, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderBottomLeftRadius: 5, borderBottomEndRadius: 5 }}>
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
        refreshing={ isLoading }
        onRefresh={ getData }
        horizontal={ false }
        numColumns={ 2 }
      />
      
      <StatusBar backgroundColor={ '#2eb877' } />
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