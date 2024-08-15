import { useMutation, useQuery, useQueryClient } from "react-query";

// Apis
import { addProduct, getProductId, getProducts } from "@/apis";

// Constants
import { QUERY_KEY } from "@/constants";

// Types
import { Params, Product } from "@/types";
import { AxiosError } from "axios";
import { axiosClient } from "@/services";

// Products list
export const useProducts = (
  params: Params,
  onError: (error: string) => void,
) => {
  const { data, ...rest } = useQuery({
    queryKey: QUERY_KEY.PRODUCT_LIST(params),
    queryFn: () => getProducts(params),
    onError: (error) => onError((error as AxiosError).message),
  });

  return {
    ...rest,
    data: data?.data || [],
  };
};

// Product detail
export const useProductId = (
  productId: string | undefined,
  onError: (error: string) => void,
) => {
  const { data, ...rest } = useQuery({
    //error
    queryKey: QUERY_KEY.PRODUCT_DETAIL(productId),
    queryFn: () => getProductId(productId),
    onError: (error) => onError((error as AxiosError).message),
  });
  return {
    ...rest,
    data: data?.data,
  };
};

// Add product
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Product) => await addProduct(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.ADD_PRODUCT,
      });
    },
  });
};

// Update product
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Product) =>
      await axiosClient.put<Product>(`products/${payload.id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.ADD_PRODUCT,
      });
    },
  });
};
