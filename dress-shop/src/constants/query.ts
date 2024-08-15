import { Params } from "@/types";

export const QUERY_KEY = {
  PRODUCT_LIST: (param: Params) => ["products", param],
  PRODUCTS_BY_CATEGORY: (category: string, params: Params) => [
    "products",
    category,
    params,
  ],
  PRODUCT_DETAIL: (productId: string | undefined) => ["products", productId],
  ADD_PRODUCT: ["products"],
};
