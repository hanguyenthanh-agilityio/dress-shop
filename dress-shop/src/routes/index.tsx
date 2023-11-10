
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../components/ErrorPage';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail/productDetail';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <ProductDetail />,
        path: '/product-detail/:productId',
      },
    ],
  },
]);
