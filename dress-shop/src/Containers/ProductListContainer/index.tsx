import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import ProductList from "@/components/ProductList";
import LoadingIndicator from "@/components/LoadingIndicator";

// APIs
import { useProductList } from "@/apis/app";

// Types
import { Params } from "@/types/common";

const ProductListContainer = () => {
  const toast = useToast();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";

  let params: Params = {
    limit: 10,
    page: 1,
    sortby: "price",
  };

  if (search) {
    params = {
      ...params,
      search,
    };
  }

  if (category) {
    params = {
      ...params,
      category,
    };
  }

  if (order) {
    params = {
      ...params,
      order,
    };
  }
  //  Check
  const handleError = useCallback(
    (error: string) => {
      toast({
        title: error,
        status: "error",
        isClosable: true,
      });
    },
    [toast],
  );

  const { data: products, isLoading } = useProductList(params, handleError);

  return (
    <>
      {isLoading ? <LoadingIndicator /> : <ProductList products={products} />}
    </>
  );
};

export default ProductListContainer;
