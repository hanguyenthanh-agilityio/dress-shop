
import { createBrowserRouter } from 'react-router-dom';

// Components
import ErrorPage from '../components/ErrorPage';

// Layouts
import MainLayout from '../layouts/MainLayout';

// Pages
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import ProductCart from '../pages/ProductCart';

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
        path: '/products/:productId',
      },
      {
        element: <ProductCart />,
        path: '/cart',
      },
    ],
  },
]);
