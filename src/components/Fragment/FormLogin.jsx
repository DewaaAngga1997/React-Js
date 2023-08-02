import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Button';
import { useEffect, useRef } from 'react';

const FormLogin = () => {
  // di bawah ini fungsi hendle login
  const handleLogin = (event) => {
    event.preventDefault();
    // code local storage untuk menyimpat data ke local storage
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    //code di bawah ini untuk membawa ke halaman product setelah sukses login
    window.location.href = '/products';
  };

  //useRef untuk memanipulasi data DOM agar di form login kursor focus ke input email,
  // supaya di halaman login kita bisa langsung mengetikan email, jadi tidak perlu lagi mengrahkan kursor ke input email dan mengklik kolom
  //saat menggunakan useRef kita tidak bisa menggunakannya sama seperti props, maka dari itu kita harus menggunakan forwardRef
  // karena InputForm kita memanggil komponennya menggunakan props maka di tiap komponennya kita tambahkan forwadRef di komponen Input.jsx dan Index.jsx
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {/* tambahkan ref={emailRef} pada input email */}
      <InputForm label="Email" type="email" placeholder="example@mail.com" name="email" ref={emailRef}></InputForm>
      <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
      <Button classname="bg-blue-600 w-full" type="submit" onClick={() => handleLogin}>
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
