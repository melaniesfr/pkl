import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { colors } from '../../../utils';
import axios from 'axios';

export default function Beranda({ renderItem }) {
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
        showsVerticalScrollIndicator={ false }
        style={{ marginVertical: 8 }}
      />
      
      <StatusBar backgroundColor={ colors.green1 } />
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