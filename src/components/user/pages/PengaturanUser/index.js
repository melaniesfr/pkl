import React from 'react';
import { Pengaturan } from '../../../primary';

export default function PengaturanUser({ navigation }) {
  return (
    <Pengaturan
      onPressBahasa={() => navigation.navigate('BahasaUser')}
      onPressTentang={() => navigation.navigate('TentangUser')}
      onPressTitle={() => navigation.navigate('Login')}
      title={'Log Out'}
    />
  );
};