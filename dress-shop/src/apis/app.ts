import axiosClient from "@/services/axiosClients";
import { useQuery } from "react-query";
import { AxiosError } from "axios";

// Types
import { Params, Product } from "@/types/common";

// Get product list
export const useProductList = (
  params: Params,
  onError: (error: string) => void,
) => {
  const { data, ...rest } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axiosClient.get<Product[]>("products", {
        params,
      }),
    onError: (error) => onError((error as AxiosError).message),
  });

  return {
    ...rest,
    data: data?.data || [],
  };
};

// Get product list by id
export const useProductById = (productId: string | undefined) => {
  const { data }= useQuery({
    queryKey: ["products", productId],
    queryFn: () => axiosClient.get<Product>(`products/${productId}`),
  });

  return {
    data: data?.data,
  };
};
