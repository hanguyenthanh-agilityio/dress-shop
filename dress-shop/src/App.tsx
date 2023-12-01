import { RouterProvider } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

// Themes
import CHAKRA_THEME_DEFAULT from "./themes/chakra";

// Global style
import GlobalStyles from "./globalStyles";

// Routes
import { router } from "./routes";

// Stores
import Context from "./stores/Context";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
        <Context>
          <CSSReset />
          <RouterProvider router={router} />
          <GlobalStyles />
        </Context>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
