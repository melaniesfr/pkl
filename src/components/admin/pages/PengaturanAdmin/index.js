import React from 'react';
import { Pengaturan } from '../../../primary';

export default function PengaturanAdmin({ navigation }) {
  return (
    <Pengaturan
      onPressBahasa={() => navigation.navigate('BahasaAdmin')}
      onPressTentang={() => navigation.navigate('TentangAdmin')}
      onPressTitle={() => navigation.navigate('Login')}
      title={'Log Out'}
    />
  );
};