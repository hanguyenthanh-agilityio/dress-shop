import { ChangeEvent, lazy, Suspense, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, useDisclosure, useToast } from "@chakra-ui/react";

// Components
import { LoadingIndicator } from "@/components";
const ProductListContainer = lazy(
  () => import("@/components/ProductListContainer"),
);
const SortBar = lazy(() => import("@/components/SortBar"));

// Utils
import { MainCategories } from "@/utils";

// Constants
import { OPTION_SORT } from "@/constants";
import { useAddProduct } from "@/hooks";
import { Product } from "@/types";
import { AxiosError } from "axios";

const ProductSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterCategory = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";
  const toast = useToast();
  const { onClose } = useDisclosure();

  const { mutate: addProduct, isLoading: isLoadingAdd } = useAddProduct();

  // Handle sort product
  const handleChangeSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      searchParams.set("order", value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  // Show message when create success and close modal
  const handleConfirmSuccess = useCallback(() => {
    onClose();
    toast({
      title: "Appointment created.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, []);

  // Show message when create fail
  const handleError = useCallback((error: string) => {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }, []);

  // Handle confirm add product
  const handleConfirm = useCallback((data: Product) => {
    addProduct(data, {
      onSuccess: handleConfirmSuccess,
      onError: (error) => handleError((error as AxiosError).message),
    });
  }, []);

  return (
    <>
      <Container
        minH="90vh"
        mb={{ xs: "65px" }}
        pb="20px"
        p="0 15px"
        mt={{ lg: "80px" }}
      >
        <Suspense fallback={<LoadingIndicator />}>
          <SortBar
            categories={MainCategories()}
            options={OPTION_SORT}
            onChangeSelect={handleChangeSelect}
            filterCategory={filterCategory}
            order={order}
            onConfirm={handleConfirm}
            isLoading={isLoadingAdd}
          />
        </Suspense>
        <Suspense fallback={<LoadingIndicator />}>
          <ProductListContainer />
        </Suspense>
      </Container>
    </>
  );
};

export default ProductSearch;
