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

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />
  },
  {
    path: "/product-detail",
    element: <ProductDetail />
  }
])

function App() {
  return (
    <>
      <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
        <RouterProvider router={router} />
        <SearchInput onChange={()=>{}}/>
      </ChakraProvider>
    </>
  )
}

export default App
