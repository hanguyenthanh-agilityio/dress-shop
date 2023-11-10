
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import './App.css'

// Themes
import CHAKRA_THEME_DEFAULT from './themes/chakra'

// Global style
import GlobalStyles from './globalStyles'

// Routes
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
