import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ProductList from './pages/ProductList/productList'
import ProductDetail from './pages/ProductDetail/productDetail'
import { ChakraProvider } from '@chakra-ui/react'
import CHAKRA_THEME_DEFAULT from './themes/chakra'
import SearchInput from './components/SearchInput'
import Header from './components/Header'
import GlobalStyles from './globalStyles'
import Footer from './components/Footer'
import Card from './components/Card'
import { CARD } from './constants/common'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
      <RouterProvider router={router} />
      <SearchInput onChange={() => {}} />
      <Header />
      <Footer />
      <GlobalStyles />
      <Card
        src={CARD.imageURL}
        altText={CARD.name}
        name={CARD.name}
        price={CARD.price}
      />
    </ChakraProvider>
  );
}

export default App;
