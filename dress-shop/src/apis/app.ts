import axiosClient from "@/services/axiosClients";
import { Params, Product } from "@/types/common";
import { useQuery } from "react-query";
import { AxiosError } from "axios";

// Get product list
export const useProductList = (
  params: Params,
  onError: (error: string) => void
) => {
  const {data, ...rest} = useQuery({
    queryKey: ['products'],
    queryFn: () =>
    axiosClient.get<Product[]>('products', {
      params
    }),
    onError: (error) => onError((error as AxiosError).message),
  });

  return {
    ...rest,
    data: data?.data || [],
  };
}

// Get product list by id
export const useProductById = (productId: string | undefined) => {
  const {data} = useQuery({
    queryKey: ['products', productId],
    queryFn: () =>
      axiosClient.get(`products/${productId}`)
  })

  return {
    data: data?.data || []
  }
}
