import { ROUTES } from "@/constants";
import { lazy } from "react";

// Pages
const Home = lazy(() => import("@/pages/Home"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const ProductCart = lazy(() => import("@/pages/ProductCart"));
const ProductSearch = lazy(() => import("@/pages/ProductSearch"));

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
