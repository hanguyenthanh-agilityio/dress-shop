import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useCallback } from "react";

// Components
import { LoadingIndicator, ProductList, SortBar } from "@/components";
import { Button, Container, Flex, Text } from "@chakra-ui/react";

// APIs
import { getProducts } from "@/apis";

// Constants
import { LOADING_STATUS } from "@/constants";

const ProductSearch = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";

  const params = {
    limit: 20,
    ...(search && { search }),
    ...(category && { category }),
    ...(order && { order, sortBy: "price" }),
  };
  const {
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["getProductsByCategory", search, category, order],
    queryFn: ({ pageParam = 1 }) => getProducts({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  const handleLoadMore = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return status === LOADING_STATUS.PENDING ? (
    <LoadingIndicator />
  ) : status === LOADING_STATUS.ERROR ? (
    <Text>Error: {error?.message}</Text>
  ) : (
    <Container
      minH="90vh"
      mb={{ xs: "65px" }}
      pb="20px"
      p="0 15px"
      mt={{ lg: "80px" }}
    >
      <SortBar refetch={refetch} />
      {data?.pages.map((pageData, i) => (
        <React.Fragment key={i}>
          <ProductList products={pageData.data} />
        </React.Fragment>
      ))}

      <Flex justifyContent="center" mt="50px">
        <Button
          size={{ xs: "small", md: "default" }}
          mb="20px"
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
    </Container>
  );
};

export default ProductSearch;
