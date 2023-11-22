import { useToast } from "@chakra-ui/react"
import { useCallback } from "react";

// Components
import ProductList from "@/components/ProductList";
import LoadingIndicator from "@/components/LoadingIndicator";

// APIs
import { useProductList } from "@/apis/app";

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

  const { data: products, isLoading } = useProductList(initial, handleError);
  console.log(products);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ProductList products={products} />
      )}
    </>
  )
};

export default ProductListContainer;
