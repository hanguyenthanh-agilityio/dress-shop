import { ChangeEvent, lazy, Suspense, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, useDisclosure, useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";

// Components
import { LoadingIndicator, SortBar } from "@/components";
const ProductListContainer = lazy(
  () => import("@/components/ProductListContainer"),
);

// Hooks
import { useAddProduct } from "@/hooks";

// Types
import { Product } from "@/types";

const ProductSearch = () => {
  const toast = useToast();
  const { onClose } = useDisclosure();

  const [searchParams, setSearchParams] = useSearchParams();

  const filterCategory = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";

  const { mutate: addProduct, isLoading: isLoadingAdd } = useAddProduct();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log("urlParams", urlParams.get("order"));

  // Handle sort product
  const handleChangeSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      searchParams.set("order", value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  // Show error message when create fail
  const handleError = useCallback((error: string) => {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }, []);

  // Show message when create success and close modal
  const handleConfirmSuccess = useCallback(() => {
    console.log("confirm", onClose);

    onClose();
    toast({
      title: "Product created.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [onClose, toast]);

  // Handle confirm add product
  const handleConfirm = useCallback(
    (data: Product) => {
      addProduct(data, {
        onSuccess: handleConfirmSuccess,
        onError: (error) => handleError((error as AxiosError).message),
      });
    },
    [addProduct],
  );
  return (
    <>
      <Container
        minH="90vh"
        mb={{ xs: "65px" }}
        pb="20px"
        p="0 15px"
        mt={{ lg: "80px" }}
      >
        <SortBar
          onChangeSelect={handleChangeSelect}
          filterCategory={filterCategory}
          order={order}
          onConfirm={handleConfirm}
          isLoading={isLoadingAdd}
        />
        <Suspense fallback={<LoadingIndicator />}>
          <ProductListContainer />
        </Suspense>
      </Container>
    </>
  );
};

export default ProductSearch;
