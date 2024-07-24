import { createBrowserRouter } from "react-router-dom";

// Pages
import { Home, ProductDetail, ProductCart, ProductSearch } from "@/pages";

// Constants
import { ROUTES } from "@/constants";

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: ROUTES.HOME,
      },
      {
        element: <ProductDetail />,
        path: ROUTES.PRODUCT_DETAIL,
      },
      {
        element: <ProductCart />,
        path: ROUTES.PRODUCT_CART,
      },
      {
        element: <ProductSearch />,
        path: ROUTES.PRODUCT_SEARCH,
      },
    ],
  },
]);
