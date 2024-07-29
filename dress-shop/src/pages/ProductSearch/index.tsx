import { ChangeEvent, lazy, Suspense, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "@chakra-ui/react";

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

// Containers

const ProductSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterCategory = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";

  // Handle sort product
  const handleChangeSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      searchParams.set("order", value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return (
    <>
      <Container
        minH="90vh"
        mb={{ xs: "50px", lg: "-48px" }}
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
