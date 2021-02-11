import React from 'react';
import { Pengaturan } from '../../../primary';
import AuthContext from '../../../primary/Auth';

export default function PengaturanUser({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  
  return (
    <Pengaturan
      onPressBahasa={() => navigation.navigate('BahasaUser')}
      onPressTitle={() => signOut()}
      title={'Log Out'}
    />
  );
};