import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Themes
import CHAKRA_THEME_DEFAULT from "./themes/chakra";

// Routes
import { router } from "./routes";

// Stores
import Context from "./stores/Context";

// Components
import { ErrorBoundary, LoadingIndicator } from "./components";

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
          <Suspense fallback={<LoadingIndicator />}>
            <ErrorBoundary>
              <RouterProvider router={router} />
            </ErrorBoundary>
          </Suspense>
        </Context>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
