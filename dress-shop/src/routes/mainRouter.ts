import { ROUTES } from "@/constants";

// Pages
import { Home, ProductCart, ProductDetail, ProductSearch } from "@/pages";

export const MAIN_ROUTES = [
  {
    title: "Projects",
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    title: "Project Detail",
    path: ROUTES.PRODUCT_DETAIL,
    Component: ProductDetail,
  },
  {
    title: "Projects",
    path: ROUTES.PRODUCT_CART,
    Component: ProductCart,
  },
  {
    title: "Project Detail",
    path: ROUTES.PRODUCT_SEARCH,
    Component: ProductSearch,
  },
];
