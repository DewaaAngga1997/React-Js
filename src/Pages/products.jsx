import { Fragment } from 'react';
import CardProduct from '../components/Fragment/CardProduct';
import Button from '../components/Elements/Button/Button';

const products = [
  {
    id: 1,
    image: '/images/product-1.jpg',
    name: 'Sepatu Nike Green',
    price: 'Rp 1.000.000',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem unde inventore adipisci alias pariatur cumque, aut aliquam sunt possimus doloremque similique quam est voluptatibus facere, iste placeat enim iure.',
  },
  {
    id: 2,
    image: '/images/product-2.jpg',
    name: 'Sepatu Nike Red',
    price: 'Rp 1.500.000',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
  },
  {
    id: 3,
    image: '/images/product-1.jpg',
    name: 'Sepatu Nike Red',
    price: 'Rp 500.000',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
  },
];

//cara memanggil email yg sudah tersimpan saat login di local storage
const email = localStorage.getItem('email');

const ProductsPage = () => {
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
        {products.map((product) => (
          //code di bawah ini key={product.id} harus dibuat agar agar tidak ada error di console log
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price}>Add To Cart</CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
