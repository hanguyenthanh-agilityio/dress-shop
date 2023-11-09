
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../components/ErrorPage';
import ProductList from '../pages/ProductList/productList';
import ProductDetail from '../pages/ProductDetail/productDetail';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ProductList />,
        path: "/",
      },
      {
        element: <ProductDetail />,
        path: '/product-detail',
      },
    ],
  },
]);
