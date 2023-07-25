import FormRegister from '../components/Fragment/FormRegister';
import AuthLayout from '../components/Layout/AuthLayouts';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">Have an account? {""}
      <Link to="/login" className ="font-bold text-blue-600">Login</Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
