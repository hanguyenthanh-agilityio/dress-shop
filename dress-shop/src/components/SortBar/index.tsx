import { ChangeEvent, lazy, memo, Suspense, useCallback } from "react";
import { Button, Flex, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Components
import { LoadingIndicator, Select } from "@/components";
const ModalForm = lazy(() => import("@/components/ModalForm"));

// Types
import { Category, Product } from "@/types";

// Constants
import { MEN_CATEGORY, OPTION_SORT, ROUTES, WOMEN_CATEGORY } from "@/constants";
import { useAddProduct } from "@/hooks";
import { AxiosError } from "axios";

const SortBar = memo(({ refetch }: { refetch: () => void }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const { mutate: addProduct, isLoading: isLoadingAdd } = useAddProduct();

  const [searchParams, setSearchParams] = useSearchParams();

  const filterCategory = searchParams.get("category") || "";
  const order = searchParams.get("order") || "";

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Handle filter by category
  const handleClickCategories = useCallback(
    (value: string) => {
      navigate(`${ROUTES.PRODUCT_SEARCH}?category=${value}`),
        {
          state: {
            category: value,
          },
        };
    },
    [navigate],
  );

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

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  // const order = searchParams.get("order") || "";

  console.log("search, category, order", search, category, order);

  // Show message when create success and close modal
  const handleConfirmSuccess = useCallback(() => {
    onClose();
    toast({
      title: "Product created.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    refetch();
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

  const categories = [
    {
      id: WOMEN_CATEGORY.id,
      img: WOMEN_CATEGORY.img,
      alt: WOMEN_CATEGORY.alt,
      label: WOMEN_CATEGORY.label,
      action: handleClickCategories,
      value: WOMEN_CATEGORY.value,
    },
    {
      id: MEN_CATEGORY.id,
      img: MEN_CATEGORY.img,
      alt: MEN_CATEGORY.label,
      label: MEN_CATEGORY.label,
      action: handleClickCategories,
      value: MEN_CATEGORY.value,
    },
  ];

  return (
    <Flex
      p="10px"
      mb="20px"
      flexDir={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "center", md: "space-between" }}
    >
      <Flex justifyContent={{ xs: "center" }} alignItems="center">
        {categories.map(({ id, action, label, value }: Category) => (
          <Button
            key={id}
            variant="primary"
            size={{ xs: "default", lg: "medium" }}
            onClick={() => action(value)}
            data-testid={id}
            p={{ xs: "8px 30px", md: "10px 50px" }}
            bg={filterCategory !== value ? "#3a3b3c" : "background.red"}
            color={filterCategory !== value ? "text.default" : "text.default"}
            width={{ xs: "100%" }}
            border="none"
          >
            {label}
          </Button>
        ))}
        <Button
          ml="10px"
          color="text.default"
          px="15px"
          onClick={onOpen}
          data-testid="new-product"
        >
          Add new product
        </Button>
        <Suspense fallback={<LoadingIndicator />}>
          {isOpen && (
            <ModalForm
              modalTitle="Product"
              buttonLabel="Confirm"
              onClose={onClose}
              onConfirm={handleConfirm}
              isLoading={isLoadingAdd}
              defaultValue={urlParams.get("category")!}
            />
          )}
        </Suspense>
      </Flex>
      <Flex
        alignItems="center"
        textAlign="center"
        justifyContent={{ xs: "center" }}
        margin={{ xs: "10px", lg: "0" }}
      >
        <Text
          pr={{ xs: "5px", md: "10px" }}
          w="100px"
          color="#fff"
          textAlign="left"
        >
          Sort by
        </Text>
        <Select
          options={OPTION_SORT}
          onChange={handleChangeSelect}
          value={order}
        />
      </Flex>
    </Flex>
  );
});

export default SortBar;
