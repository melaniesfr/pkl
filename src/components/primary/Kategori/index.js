import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import axios from 'axios';


export default function Kategori({ renderItem }) {
  const [ data, setData ] = useState();
  const [ isLoading, setIsLoading ] = useState(false);

  const getData = () => {
    setIsLoading(true);

    // axios.get('http://pkl-dinkop.000webhostapp.com/pkl/kategori.php')
    axios.get('http://192.168.43.89/pkl/kategori.php')
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
        style={{ marginVertical: 10 }}
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