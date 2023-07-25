import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Button';
const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" placeholder="insert your name here..." name="text"></InputForm>
      <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="******" name="passwprd"></InputForm>
      <InputForm label="Confirm Password" type="password" placeholder="******" name="ConfirmPasswprd"></InputForm>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
