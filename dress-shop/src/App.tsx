import './App.css'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import CHAKRA_THEME_DEFAULT from './themes/chakra'
import GlobalStyles from './globalStyles'
import { router } from './routes'


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
