// Services
import { axiosClient } from "@/services";

// Types
import { Params, Product } from "@/types";

// Get product list
export const getProducts = (params: Params) =>
  axiosClient.get<Product[]>("products", {
    params,
  });

// Get product list by category
export const getProductsByCategory = async (
  category: string,
  params: Params,
) => {
  console.log("category", category);
  return await axiosClient.get<Product>(`products?category=${category}`, {
    params,
  });
};

// Get product by id
export const getProductId = async (productId: string | undefined) =>
  await axiosClient.get<Product>(`products/${productId}`);

// Add product
export const addProduct = async (payload?: Product) =>
  await axiosClient.post<Product>(
    "https://66ab592c636a4840d7ca46b4.mockapi.io/products",
    payload,
  );
