import { Params } from "@/types/common";

export const QUERY_KEY = {
  PRODUCT_LIST: (param: Params) => ['products', param],
  PRODUCT_DETAIL: (productId: string | undefined) => ['products', productId]
}
