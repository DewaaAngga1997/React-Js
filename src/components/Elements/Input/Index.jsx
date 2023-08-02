import Label from './Label';
import Input from './Input';
import { forwardRef } from 'react';

// forwardref bertujuan sama seperti props, jika menggunakan useRef dalam lomponen dan di panggil di komponen lain harus menggunakan forwardRef
const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref}></Input>
    </div>
  );
});

export default InputForm;
