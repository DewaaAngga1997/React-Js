import { Fragment, useEffect, useRef, useState } from 'react';
import CardProduct from '../components/Fragment/CardProduct';
import Button from '../components/Elements/Button/Button';
import { getProducts } from '../services/product.service';
import { getUsername } from '../services/auth.service';

//cara memanggil username dari token yang sudah tersimpan dari local storage

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); //code ini adalah untuk membuat set awal total price (sama seperti komponen didmount tapi menggunakan use effect)
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //code di bawah parsing datanya dari local storage kalau misalnya ada tampilkan kalau tidak tampilkan data kosong
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  useEffect(() => {
    // kode ini menghendle agarsaat memasukan /products di http sebelum ada token tidak bisa langsung masuk ke halaman products
    const token = localStorage.getItem('token');
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  //code di bawah adalah untuk membuat total price (sama seperti komponen didupdate tapi menggunakan use effect)
  useEffect(() => {
    //code di bawah if (cart.length > 0) => jika ada data lakukan hal ini kalau tidak biarkan tetap 0 jangan di jumlahkan
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem('cart', JSON.stringify(cart)); //simpan data di local storage setelah terjadi perubahan pada state cart
    }
  }, [cart, products]);

  //code di bawah ada lah menghendle button logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  //code untuk hendle cart menampilkan data di cart
  const handleAddtoCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // UseRef bisa di gunakan untuk memanipulasi DOM contohnya kita akan menggunakan useRef
  // untuk memanipulasi table row total price jika belum ada data di cart total price tidak akan di tampilkan (cek lanjutannya di table tr)
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      //jika cart ada data maka tampilkan data
      totalPriceRef.current.style.display = 'table-row';
    } else {
      //jika cart tidak ada data maka jangan di tampilkan data
      totalPriceRef.current.style.display = 'none';
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center">
        {username}
        <Button classname="ml-5 bg-red-600" onClick={() => handleLogout()}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {/* code di bawah ini  products.length > 0 && products.map((product) adalah jika datanya ada kita mapping kalau ngak ada jangan di mapping */}
          {products.length > 0 &&
            products.map((product) => (
              //code di bawah ini key={product.id} harus dibuat agar agar tidak ada error di console log
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddtoCart}>
                  Add To Cart
                </CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-blue-600 font-bold text-3xl ml-5 mb-2 ">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* code di bawah ini  products.length > 0 && products.map((product) adalah jika datanya ada kita mapping kalau ngak ada jangan di mapping */}
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}...</td>
                      <td>$ {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                      <td>{item.qty}</td>
                      <td>$ {(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                    </tr>
                  );
                })}
              {/* useReff jika DOM biasanya mengambil id , tapi useReff menggunakan reff untuk mengambil element htmlnya  */}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>$ {totalPrice.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="flex justify-center mb-5">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
