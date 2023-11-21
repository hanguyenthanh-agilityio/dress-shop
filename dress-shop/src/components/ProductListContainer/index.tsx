import ProductList from "../ProductList";
import { useCallback } from "react";
import { useProductList } from "@/apis/app";
import { useToast } from "@chakra-ui/react";

const ProductListContainer = () => {
  const toast = useToast();
  const initial = {
    page: 1,
    limit: 8,
  };

  const handleError = useCallback((error: string) => {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }, []);

  const { data: products } = useProductList(initial, handleError);
  console.log(products);

  return <ProductList products={products} />;
};

export default ProductListContainer;
