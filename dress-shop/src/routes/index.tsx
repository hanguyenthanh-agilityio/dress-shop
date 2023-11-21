import { createBrowserRouter } from "react-router-dom";

// Components
import ErrorPage from "@/components/ErrorPage";

// Layouts
import MainLayout from "@/layouts/MainLayout";

// Pages
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import ProductCart from "@/pages/ProductCart";
import ProductSearch from "@/pages/ProductSearch";

// Constants
import { ROUTES } from "@/constants/routes";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: ROUTES.HOME,
      },
      {
        element: (
          <ProductDetail
            product={{
              id: 0,
              src: "",
              altText: undefined,
              name: "",
              price: 0,
              description: undefined,
            }}
          />
        ),
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
