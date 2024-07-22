import { useQuery } from "@tanstack/react-query";

// Apis
import { getProductId, getProducts } from "@/apis";

// Constants
import { QUERY_KEY } from "@/constants";

// Types
import { Params } from "@/types";

// Products list
export const useProducts = (params: Params) => {
  const { data, ...rest } = useQuery({
    queryKey: QUERY_KEY.PRODUCT_LIST(params),
    queryFn: () => getProducts(params),
  });

  return {
    ...rest,
    data: data?.data || [],
  };
};

// Product detail
export const useProductId = (productId: string | undefined) => {
  const { data, ...rest } = useQuery({
    queryKey: QUERY_KEY.PRODUCT_DETAIL(productId),
    queryFn: () => getProductId(productId),
  });
  return {
    ...rest,
    data: data?.data,
  };
};
