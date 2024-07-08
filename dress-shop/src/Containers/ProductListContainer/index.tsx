import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

// Services
import axiosClient from "@/services/axiosClients";

// Types
import { Params, Product } from "@/types";

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
      params: { limit: 8, page: pageParam, search, category, order },
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
  // console.log("data", data?.pages[0].headers);

  let params: Params = {
    limit: 5,
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params = {
      ...params,
      order,
    };
  }

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
          disabled={!hasNextPage || isFetchingNextPage}
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
