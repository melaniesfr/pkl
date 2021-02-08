import React from 'react';
import { Pengaturan } from '../../../primary';
import AuthContext from '../../../primary/Auth';

export default function PengaturanAdmin({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Pengaturan
      onPressBahasa={() => navigation.navigate('BahasaAdmin')}
      onPressTentang={() => navigation.navigate('TentangAdmin')}
      onPressTitle={() => signOut()}
      title={'Log Out'}
    />
  );
};