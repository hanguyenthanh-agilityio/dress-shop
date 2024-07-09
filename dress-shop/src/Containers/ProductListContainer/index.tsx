import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

// Services
import axiosClient from "@/services/axiosClients";

// Types
import { Product } from "@/types";

// Components
import { ProductList } from "@/components";
import { Button, Flex } from "@chakra-ui/react";

const ProductListContainer = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";

  const fetchProduct = ({ pageParam = 1 }) => {
    return axiosClient.get<Product[]>("products", {
      params: {
        limit: 8,
        page: pageParam,
        ...(search && { search }),
        ...(category && { category }),
        ...(order && { order }),
      },
    });
  };

  const {
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["products", search, category, order],
    queryFn: fetchProduct,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, pages, lastPageParam) => {
      console.log("_lastPage", _lastPage);
      console.log("lastPageParam", lastPageParam);
      if (pages.length < 2) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data?.pages.map((pageData, i) => (
        <React.Fragment key={i}>
          <ProductList products={pageData.data} />
        </React.Fragment>
      ))}

      <Flex justifyContent="center" my="50px">
        <Button
          size={{ xs: "small", md: "default" }}
          variant="secondary"
          onClick={() => fetchNextPage()}
          isDisabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
        </Button>
      </Flex>
    </>
  );
};

export default ProductListContainer;
