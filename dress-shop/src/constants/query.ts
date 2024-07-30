import { Params } from "@/types";

export const QUERY_KEY = {
  PRODUCT_LIST: (param: Params) => ["products", param],
  PRODUCT_DETAIL: (productId: string | undefined) => ["products", productId],
  ADD_PRODUCT: ["products"],
};
