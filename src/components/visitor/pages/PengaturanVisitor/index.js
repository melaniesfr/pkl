import React from 'react';
import { Pengaturan } from '../../../primary';

export default function PengaturanVisitor({ navigation }) {
  return (
    <Pengaturan
      onPressBahasa={() => navigation.navigate('BahasaVisitor')}
      onPressTentang={() => navigation.navigate('TentangVisitor')}
      onPressTitle={() => navigation.navigate('Login')}
      title={'Keluar'}
    />
  );
};