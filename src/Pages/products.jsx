import { Fragment, useState } from 'react';
import CardProduct from '../components/Fragment/CardProduct';
import Button from '../components/Elements/Button/Button';
// import Counter from '../components/Fragment/Counter';

const products = [
  {
    id: 1,
    image: '/images/product-1.jpg',
    name: 'Sepatu Nike',
    price: 1000000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem unde inventore adipisci alias pariatur cumque, aut aliquam sunt possimus doloremque similique quam est voluptatibus facere, iste placeat enim iure.',
  },
  {
    id: 2,
    image: '/images/product-2.jpg',
    name: 'Sepatu Cat ',
    price: 1500000,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
  },
  {
    id: 3,
    image: '/images/product-1.jpg',
    name: 'Sepatu Kuda ',
    price: 500000,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
  },
];

//cara memanggil email yg sudah tersimpan saat login di local storage
const email = localStorage.getItem('email');

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  //code di bawah ada lah menghendle button logout
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  //code untuk hendle cart menampilkan data di cart
  const handleAddtoCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
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
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            //code di bawah ini key={product.id} harus dibuat agar agar tidak ada error di console log
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddtoCart}>
                Add To Cart
              </CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-blue-600 font-bold text-3xl ml-5 mb-2 ">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                    <td>{item.qty}</td>
                    <td>Rp {(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="flex justify-center w-100">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
