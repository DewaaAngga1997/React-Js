import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Button';

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log ("anda telah login");
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="******" name="passwprd" ></InputForm>
      <Button classname="bg-blue-600 w-full" type="submit" >Login</Button>
    </form>
  );
};

export default FormLogin;
