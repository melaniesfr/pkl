import React, { useState } from 'react';
import { Profil } from '../../../primary';

export default function ProfilAdmin({ route, navigation }) {
  const [ data, setData ] = useState({
    nama: 'Admin Aplikasi',
    email: 'admin@gmail.com',
    password: 'admin',
    secureTextEntry: true
  });

  return (
    <Profil
      data={ data }
      setData={ setData }
    />
  );
};