// Services
import { axiosClient } from "@/services";

// Types
import { Params, Product } from "@/types";

// Get product list
export const getProducts = (params: Params) =>
  axiosClient.get<Product[]>("products", {
    params,
  });

// Get product list by id
export const getProductId = async (productId: string | undefined) =>
  await axiosClient.get<Product>(`products/${productId}`);
