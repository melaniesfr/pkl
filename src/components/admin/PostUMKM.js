import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TextInput, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import noImage from '../../images/noImage.png';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PostUMKM({ navigation }) {
  const [loading, setLoading] = useState(false);
  
  const [avatarSource, setAvatarSource] = useState(null);
  const [imgSource, setImgSource] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

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
    let base_url = 'http://192.168.43.89/pkl/images/';
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Form Tambah UMKM</Text>

        <View style={styles.card}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }} onPress={selectImage}>
            { !avatarSource && <Image source={ noImage } style={{ width: 150, height: 100, resizeMode: 'contain' }} /> }

            { avatarSource && <Image source={{uri: avatarSource}} style={{ width: 150, height: 100, resizeMode: 'contain' }} /> }

            { isUploading && <ActivityIndicator /> }
          </TouchableOpacity>

          <TextInput placeholder={'Nama Produk'} style={styles.input} />
          <TextInput placeholder={'Nama Pemilik'} style={styles.input} />
          <TextInput placeholder={'Deskripsi Produk'} style={styles.input} />
          <TextInput placeholder={'Desa'} style={styles.input} />
          <TextInput placeholder={'Kecamatan'} style={styles.input} />
          <TextInput placeholder={'No. HP/WA'} keyboardType={'number-pad'} style={styles.input} />

          <TouchableOpacity>
            <View style={styles.button}>
              <Icon
                name={'save-sharp'}
                size={15}
                color={'white'}
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: 'white' }}>{ loading ? 'Menyimpan...' : 'Simpan' }</Text>
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
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  card: {
    height: 515,
    width: '93%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    padding: 20
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5
  },
  button: {
    backgroundColor: '#4a94d9',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});