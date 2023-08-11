import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const login = (data, callback) => {
  //lanjutan FormLogin.jsx baris ke 4 dan ke 6 - 10, 16-31 , 50
  axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then((res) => {
      callback(true, res.data.token); //menetapkan nilai true, menggambil data reponse API data token
    })
    .catch((err) => {
      callback(false, err); // menetapkan nilai false, dan menampilkan errornya jika terjadi error
    });
};

//code di bawah ini adalah untuk mengambil token yang login dan menampilkan username dari token tersebut di halaman products dengan menggunakan jwt-decode (jangan lupa diinstal dulu)
//lanjutannya di halaman products.jsx baris ke 5, 21-23, 77
export const getUsername = (token) => {
  const decoded = jwt_decode(token);
  // console.log(decoded);
  return decoded.user;
};
