import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Button';
import { useState, useEffect, useRef } from 'react';
import { login } from '../../services/auth.service';

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('');
  // di bawah ini fungsi hendle login
  const handleLogin = (event) => {
    event.preventDefault();
    // // code local storage untuk menyimpat data ke local storage
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // //code di bawah ini untuk membawa ke halaman product setelah sukses login
    // window.location.href = '/products';
    const data = {
      //code di bawah ini untuk mengambil info data login
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        //jika datanya ststus nya true maka jalankan di bawah ini
        localStorage.setItem('token', res);
        window.location.href = '/products'; // jika validasi sudah benar maka tampilkan halaman products
      } else {
        //jika false atau error ambil error di console.log di response.data
        setLoginFailed(res.response.data);
      }
    });
  };

  //useRef untuk memanipulasi data DOM agar di form login kursor focus ke input email,
  // supaya di halaman login kita bisa langsung mengetikan email, jadi tidak perlu lagi mengrahkan kursor ke input email dan mengklik kolom
  //saat menggunakan useRef kita tidak bisa menggunakannya sama seperti props, maka dari itu kita harus menggunakan forwardRef
  // karena InputForm kita memanggil komponennya menggunakan props maka di tiap komponennya kita tambahkan forwadRef di komponen Input.jsx dan Index.jsx
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {/* tambahkan ref={usernameRef} pada input username */}
      <InputForm label="Username" type="text" placeholder="Jhon Doe" name="username" ref={usernameRef}></InputForm>
      <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
      <Button classname="bg-blue-600 w-full" type="submit" onClick={() => handleLogin}>
        Login
      </Button>
      {loginFailed && <p className="text-red-600 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
