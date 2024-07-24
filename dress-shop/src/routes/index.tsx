import { createBrowserRouter } from "react-router-dom";

// Constants
import { ROUTES } from "@/constants";

export const router = createBrowserRouter([
  {
    children: [
      {
        path: ROUTES.HOME,
        async lazy() {
          const Home = await import("../pages/Home");
          return { Component: Home.default };
        },
      },
      {
        async lazy() {
          const ProductDetail = await import("../pages/ProductDetail");
          return { Component: ProductDetail.default };
        },
        path: ROUTES.PRODUCT_DETAIL,
      },
      {
        async lazy() {
          const ProductCart = await import("../pages/ProductCart");
          return { Component: ProductCart.default };
        },
        path: ROUTES.PRODUCT_CART,
      },
      {
        async lazy() {
          const ProductSearch = await import("../pages/ProductSearch");
          return { Component: ProductSearch.default };
        },
        path: ROUTES.PRODUCT_SEARCH,
      },
    ],
  },
]);
