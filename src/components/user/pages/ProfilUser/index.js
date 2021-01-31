import React, { useState } from 'react';
import { Profil } from '../../../primary';

export default function ProfilUser({ route, navigation }) {
  const [ data, setData ] = useState({
    nama: 'User Aplikasi',
    email: 'user@gmail.com',
    password: 'user',
    secureTextEntry: true
  });

  return (
    <Profil
      data={ data }
      setData={ setData }
    />
  );
};