import { createBrowserRouter } from "react-router-dom";

// Components
import { ErrorBoundary } from "@/components";

// Pages
import { Home, ProductDetail, ProductCart, ProductSearch } from "@/pages";

// Constants
import { ROUTES } from "@/constants/routes";

export const router = createBrowserRouter([
  {
    children: [
      {
        element: (
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        ),
        path: ROUTES.HOME,
      },
      {
        element: (
          <ErrorBoundary>
            <ProductDetail />
          </ErrorBoundary>
        ),
        path: ROUTES.PRODUCT_DETAIL,
      },
      {
        element: (
          <ErrorBoundary>
            <ProductCart />
          </ErrorBoundary>
        ),
        path: ROUTES.PRODUCT_CART,
      },
      {
        element: (
          <ErrorBoundary>
            <ProductSearch />
          </ErrorBoundary>
        ),
        path: ROUTES.PRODUCT_SEARCH,
      },
    ],
  },
]);
