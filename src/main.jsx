import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//routerprovider untuk membuat routenya
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/error404.jsx';
import ProductsPage from './Pages/products';
import ProfilePage from './Pages/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    // kode error elemen ini digunakan agar saat route di input salah akan menuju ErrorPage di file error404
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
