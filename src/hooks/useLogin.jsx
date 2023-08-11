import { useEffect, useState } from 'react';
import { getUsername } from '../services/auth.service';

export const useLogin = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    // kode ini menghendle agarsaat memasukan /products di http sebelum ada token tidak bisa langsung masuk ke halaman products
    const token = localStorage.getItem('token');
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = '/login';
    }
  }, []);
  return username;
};
