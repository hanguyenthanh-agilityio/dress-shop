import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

// Services
import axiosClient from "@/services/axiosClients";

// Types
import { Product } from "@/types";

// Components
import { LoadingIndicator, ProductList } from "@/components";
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
        sortBy: "price",
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
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 2) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return status === "pending" ? (
    <LoadingIndicator />
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data?.pages.map((pageData, i) => (
        <React.Fragment key={i}>
          <ProductList products={pageData.data} />
        </React.Fragment>
      ))}

      <Flex justifyContent="center" mt="50px" mb="90px">
        <Button
          size={{ xs: "small", md: "default" }}
          variant="secondary"
          onClick={handleLoadMore}
          isDisabled={!hasNextPage || isFetchingNextPage}
          _hover={{
            color: hasNextPage ? "text.default" : "text.primary",
            bg: hasNextPage ? "text.primary" : "text.default",
          }}
        >
          {isFetchingNextPage ? (
            <LoadingIndicator />
          ) : hasNextPage ? (
            "Load More"
          ) : (
            "Nothing more to load"
          )}
        </Button>
      </Flex>
    </>
  );
};

export default ProductListContainer;
