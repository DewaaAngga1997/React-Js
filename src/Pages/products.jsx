import { Fragment, useState } from 'react';
import CardProduct from '../components/Fragment/CardProduct';
import Button from '../components/Elements/Button/Button';
// import Counter from '../components/Fragment/Counter';

const products = [
  {
    id: 1,
    image: '/images/product-1.jpg',
    name: 'Sepatu Nike Green',
    price: 1000000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem unde inventore adipisci alias pariatur cumque, aut aliquam sunt possimus doloremque similique quam est voluptatibus facere, iste placeat enim iure.',
  },
  {
    id: 2,
    image: '/images/product-2.jpg',
    name: 'Sepatu Nike Red',
    price: 1500000,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
  },
  {
    id: 3,
    image: '/images/product-1.jpg',
    name: 'Sepatu Nike Red',
    price: 500000,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
  },
];

//cara memanggil email yg sudah tersimpan saat login di local storage
const email = localStorage.getItem('email');

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      name: 'Sepatu Nike Red',
      qty: 1,
    },
  ]);

  //code di bawah ada lah menghendle button logout
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center">
        {email}
        <Button classname="ml-5 bg-red-600" onclick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            //code di bawah ini key={product.id} harus dibuat agar agar tidak ada error di console log
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price}>Add To Cart</CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-blue-600 font-bold text-3xl">Cart</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="flex justify-center w-100">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
