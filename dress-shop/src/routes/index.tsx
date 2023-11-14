
import { createBrowserRouter } from 'react-router-dom';

// Components
import ErrorPage from '../components/ErrorPage';

// Layouts
import MainLayout from '../layouts/MainLayout';

// Pages
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import ProductSearch from '../pages/ProductSearch';

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
        path: '/product/:productId',
      },
      {
        element: <ProductSearch />,
        path: '/search',
      },
    ],
  },
]);
