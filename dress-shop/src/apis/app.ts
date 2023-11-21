import axiosClient from "@/services/axiosClients";
import { Params, Product } from "@/types/common";
import { useQuery } from "react-query";
import { AxiosError } from "axios";

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
