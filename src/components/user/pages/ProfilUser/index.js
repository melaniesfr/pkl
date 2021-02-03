import React, { useState, useEffect } from 'react';
import { Profil } from '../../../primary';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function ProfilUser() {
  const [ data, setData ] = useState({
    nama: '',
    email: '',
    password: ''
  });

  const [ users, setUsers ] = useState();
  const loadUsers = async() => {
    await AsyncStorage.getItem('email')
    .then((res) => {
      const email = String(res);
      setUsers(email);
    });
  };

  useEffect(() => {
    loadUsers();

    axios.get('http://pkl-dinkop.000webhostapp.com/pkl/users.php')
    .then((res) => {
      for (var i=0; i<res.data.length; i++) {
        if (users === res.data[i].email) {
          setData({
            ...data,
            nama: res.data[i].nama,
            email: res.data[i].email,
            password: res.data[i].password
          });
        }
      }
    })
    .catch((err) => console.log(err));
  });

  return (
    <Profil
      data={ data }
      setData={ setData }
    />
  );
};