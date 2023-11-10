import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail/productDetail'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import CHAKRA_THEME_DEFAULT from './themes/chakra'
import GlobalStyles from './globalStyles'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
      <CSSReset />
      <RouterProvider router={router} />
      <GlobalStyles />
    </ChakraProvider>
  );
}

export default App;
