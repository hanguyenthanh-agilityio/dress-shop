import { RouterProvider } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

// Themes
import CHAKRA_THEME_DEFAULT from "./themes/chakra";

// Routes
import { router } from "./routes";

// Stores
import Context from "./stores/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import { ErrorBoundary } from "./components";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 5000 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
        <Context>
          <CSSReset />
          <ErrorBoundary>
            <RouterProvider router={router} />
          </ErrorBoundary>
        </Context>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
