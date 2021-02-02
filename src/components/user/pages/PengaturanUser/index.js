import React, { useState, useEffect } from 'react';
import { Pengaturan } from '../../../primary';
import AuthContext from '../../../primary/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PengaturanUser({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  const [ data, setData ] = useState();

  const loadData = async() => {
    await AsyncStorage.getItem('email')
    .then((res) => {
      const ress = JSON.stringify(res);
      setData(ress);
    });
  };

  useEffect(() => {
    loadData();
  });

  return (
    <Pengaturan
      onPressBahasa={() => navigation.navigate('BahasaUser')}
      onPressTentang={() => navigation.navigate('TentangUser')}
      onPressTitle={() => signOut()}
      // title={'Keluar'}
      title={ data }
    />
  );
};