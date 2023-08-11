import axios from 'axios';

//ini code GET data dari API//lanjutan di file product.jsx baris ke 5 dan ke 20
export const getProducts = (callback) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};
