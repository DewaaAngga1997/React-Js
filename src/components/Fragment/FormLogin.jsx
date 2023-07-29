import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Button';

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

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
      <Button classname="bg-blue-600 w-full" type="submit" onClick={handleLogin}>
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
