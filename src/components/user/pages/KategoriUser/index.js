import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native';
import axios from 'axios';
import { ICFoods, ICFood, ICFashion, ICHandmade, ICDrink } from '../../../../assets/icons';

export default function KategoriUser({ navigation }) {
  const [ data, setData ] = useState();
  const [ isLoading, setIsLoading ] = useState(false);

  const getData = () => {
    setIsLoading(true);

    // axios.get('http://192.168.43.89/pkl/kategori.php')
    axios.get('http://pkl-dinkop.000webhostapp.com/pkl/kategori.php')
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
      <TouchableOpacity onPress={() => navigation.navigate('DetailPerKategoriUser', { item: item })} style={styles.card}>
        { (item.kategori === 'Fashion') && <Image source={ ICFashion } style={styles.icon} /> }
        { (item.kategori === 'Kerajinan') && <Image source={ ICHandmade } style={styles.icon} /> }
        { (item.kategori === 'Kuliner') && <Image source={ ICFood } style={styles.icon} /> }
        { (item.kategori === 'Makanan Olahan') && <Image source={ ICFoods } style={styles.icon} /> }
        { (item.kategori === 'Minuman Olahan') && <Image source={ ICDrink } style={styles.icon} /> }

        <Text style={styles.text}>{ item.kategori }</Text>
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
  },
  icon: {
    height: 75,
    width: 75,
    alignSelf: 'center'
  },
  card: {
    backgroundColor: 'white',
    elevation: 10,
    margin: 5,
    borderRadius: 10,
    width: (Dimensions.get('window').width / 2) - 20,
    height: 150,
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 7,
    color: '#2eb877'
  }
});