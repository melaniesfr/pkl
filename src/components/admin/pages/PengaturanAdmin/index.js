import React, { useState, useEffect } from 'react';
import { Pengaturan } from '../../../primary';
import AuthContext from '../../../primary/Auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PengaturanAdmin({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  // const [ data, setData ] = useState();

  // const loadData = async() => {
  //   await AsyncStorage.getItem('email')
  //   .then((res) => {
  //     const email = String(res);
  //     setData(email);
  //   });
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <Pengaturan
      onPressBahasa={() => navigation.navigate('BahasaAdmin')}
      onPressTentang={() => navigation.navigate('TentangAdmin')}
      onPressTitle={() => signOut()}
      title={'Log Out'}
      // title={ data }
    />
  );
};