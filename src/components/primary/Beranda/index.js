import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { colors } from '../../../utils';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default function Beranda({ renderItem }) {
  const [ data, setData ] = useState();
  const [ isLoading, setIsLoading ] = useState(false);

  const [ search, setSearch ] = useState('');
  const [ filteredDataSource, setFilteredDataSource ] = useState();

  const getData = () => {
    setIsLoading(true);

    axios.get('http://192.168.43.89/pkl/view.php')
    .then((res) => {
      setData(res.data);
      setFilteredDataSource(res.data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setIsLoading(false);
    })
  };

  useEffect(() => {
    getData();
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter(function (item) {
        const itemData = item.produk
          ? item.produk
          : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBar
            round
            lightTheme
            searchIcon={{ size: 20 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            placeholder="Ketik di sini..."
            value={ search }
            inputStyle={{ marginLeft: 0, fontSize: 15 }}
            inputContainerStyle={{ height: 35 }}
          />

          <FlatList
            data={ filteredDataSource }
            renderItem={ renderItem }
            keyExtractor={ (item) => item.id }
            refreshing={ isLoading }
            onRefresh={ getData }
            horizontal={ false }
            numColumns={ 2 }
            showsVerticalScrollIndicator={ false }
            style={{ marginVertical: 8, alignSelf: 'center' }}
          />
        </ScrollView>
        
        <StatusBar backgroundColor={ colors.green1 } />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
});