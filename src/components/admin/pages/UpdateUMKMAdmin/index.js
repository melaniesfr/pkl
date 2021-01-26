import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import IMNoImage from '../../../../assets/images';

export default function UpdateUMKMAdmin({ route, navigation }) {
  const { item } = route.params;
  const [ loading, setLoading ] = useState(false);

  const dataKategori = [
    '- Pilih Kategori -', 'Fashion', 'Kerajinan', 'Kuliner', 'Makanan Olahan', 'Minuman Olahan'
  ];

  const [ data, setData ] = useState({
    id: item.id,
    produk: item.produk,
    pemilik: item.pemilik,
    deskripsi: item.deskripsi,
    kategori: item.kategori,
    desa: item.desa,
    kecamatan: item.kecamatan,
    telp: item.telp
  });

  const onChangeProduk = (value) => {
    setData({...data, produk: value});
  };

  const onChangePemilik = (value) => {
    setData({...data, pemilik: value});
  };

  const onChangeDeskripsi = (value) => {
    setData({...data, deskripsi: value});
  };

  const onChangeKategori = (value) => {
    setData({...data, kategori: value});
  };

  const onChangeDesa = (value) => {
    setData({...data, desa: value});
  };

  const onChangeKecamatan = (value) => {
    setData({...data, kecamatan: value});
  };

  const onChangeTelp = (value) => {
    setData({...data, telp: value});
  };
  
  const [ avatarSource, setAvatarSource ] = useState(null);
  const [ imgSource, setImgSource ] = useState(null);
  const [ isUploading, setIsUploading ] = useState(false);

  const selectImage = async () => {
    ImagePicker.showImagePicker({noData: true, mediaType: 'photo', allowsEditing: true, quality: 0.7}, (response) => {
      if (response.didCancel) {
        Alert.alert('Error!', 'User batal memilih gambar');
      } else if (response.error) {
        Alert.alert('Error!', 'ImagePicker error');
      } else if (response.customButton) {
        Alert.alert('Error!', 'User menekan tombol lain');
      } else {
        uploadImage(response.uri);
      }
    });
  };

  uploadImage = async (image_uri) => {
    setIsUploading(true);
    // let base_url = 'http://192.168.43.89/pkl/images/';
    let base_url = 'http://pkl-dinkop.000webhostapp.com/pkl/images/';
    let uploadData = new FormData();
    uploadData.append('submit', 'ok');
    uploadData.append('file', {type: 'image/jpg', uri: image_uri, name: 'uploadimagetmp.jpg'});

    fetch(base_url, {
      method: 'post',
      body: uploadData
    })
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        setIsUploading(false),
        setAvatarSource(base_url + response.image);
        setImgSource(response.image);
      } else {
        setIsUploading(false);
        Alert.alert('Error!', response.message);
      }
    })
    .catch(() => {
      setIsUploading(false);
      Alert.alert('Error!', 'Error on network');
    })
  };

  const updateData = () => {
    fetch('http://pkl-dinkop.000webhostapp.com/pkl/update_umkm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: item.id,
        produk: item.produk,
        pemilik: item.pemilik,
        deskripsi: item.deskripsi,
        kategori: item.kategori,
        desa: item.desa,
        kecamatan: item.kecamatan,
        telp: item.telp
      })
    })
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson === 'Ubah UMKM berhasil') {
        Alert.alert('Success!', resJson);
        navigation.navigate('UpdateUMKMAdmin');
      } else {
        Alert.alert('Error!', resJson);
      }
    })
    .catch((err) => console.log(err));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }} onPress={selectImage}>
            { !avatarSource && <Image source={ IMNoImage } style={{ width: 150, height: 100, resizeMode: 'contain' }} /> }

            { avatarSource && <Image source={{uri: avatarSource}} style={{ width: 150, height: 100, resizeMode: 'contain' }} /> }

            { isUploading && <ActivityIndicator /> }
          </TouchableOpacity>

          <TextInput placeholder={'Nama Produk'} style={styles.input} onChangeText={(value) => onChangeProduk(value)} value={ data.produk } />
          <TextInput placeholder={'Nama Pemilik'} style={styles.input} onChangeText={(value) => onChangePemilik(value)} value={ data.pemilik } />
          <TextInput placeholder={'Deskripsi Produk'} style={styles.input} onChangeText={(value) => onChangeDeskripsi(value)} value={ data.deskripsi } />

          <View>
            <Text style={{ marginTop: 5, fontSize: 15, color: '#bbb' }}>Kategori</Text>
            <Picker
              selectedValue={ data.kategori }
              style={{ height: 40, color: '#ccc' }}
              onValueChange={ (value) => onChangeKategori(value) }
            >
              { dataKategori.map((item, index) => (
                <Picker.Item key={index} label={item} value={item} />
              ))}
            </Picker>
          </View>

          <TextInput placeholder={'Desa'} style={styles.input} onChangeText={(value) => onChangeDesa(value)} value={ data.desa } />
          <TextInput placeholder={'Kecamatan'} style={styles.input} onChangeText={(value) => onChangeKecamatan(value)} value={ data.kecamatan } />
          <TextInput placeholder={'No. HP/WA'} keyboardType={'number-pad'} style={styles.input} onChangeText={(value) => onChangeTelp(value)} value={ data.telp } />

          <TouchableOpacity onPress={ updateData }>
            <View style={styles.button}>
              <Icon
                name={'save-sharp'}
                size={15}
                color={'white'}
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: 'white', fontSize: 15 }}>{ loading ? 'Menyimpan...' : 'Simpan' }</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  card: {
    height: 515,
    width: '93%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    padding: 20,
    marginTop: 20
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#2eb877',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});