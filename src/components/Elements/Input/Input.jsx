import { forwardRef } from 'react';

// forwardref bertujuan sama seperti props, jika menggunakan useRef dalam lomponen dan di panggil di komponen lain harus menggunakan forwardRef
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return <input type={type} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} name={name} id={name} ref={ref} />;
});
export default Input;
