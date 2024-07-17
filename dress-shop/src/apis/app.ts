import axiosClient from "@/services/axiosClients";
import { useQuery } from "@tanstack/react-query";

// Types
import { Params, Product } from "@/types";

// Constants
import { QUERY_KEY } from "@/constants";

// Get product list
export const useProductList = (params: Params) => {
  const { data, ...rest } = useQuery({
    queryKey: QUERY_KEY.PRODUCT_LIST(params),
    queryFn: () =>
      axiosClient.get<Product[]>("products", {
        params,
      }),
  });

  return {
    ...rest,
    data: data?.data || [],
  };
};

// Get product list by id
export const useProductById = (productId: string | undefined) => {
  const { data, ...rest } = useQuery({
    queryKey: QUERY_KEY.PRODUCT_DETAIL(productId),
    queryFn: () => axiosClient.get<Product>(`products/${productId}`),
  });

  return {
    ...rest,
    data: data?.data,
  };
};
