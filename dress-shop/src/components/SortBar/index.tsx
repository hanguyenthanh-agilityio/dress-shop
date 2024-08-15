import { ChangeEvent, lazy, memo, Suspense, useCallback } from "react";
import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Components
import { LoadingIndicator, Select } from "@/components";
const ModalForm = lazy(() => import("@/components/ModalForm"));

// Types
import { Category, Product } from "@/types";

// Constants
import { MEN_CATEGORY, OPTION_SORT, ROUTES, WOMEN_CATEGORY } from "@/constants";

interface SortBarProps {
  onChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  filterCategory?: string;
  order?: string;
  onConfirm: (data: Product) => void;
  isLoading?: boolean;
}

const SortBar = memo<SortBarProps>(
  ({
    onChangeSelect,
    filterCategory,
    order,
    onConfirm,
    isLoading,
  }: SortBarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

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
                onConfirm={onConfirm}
                isLoading={isLoading}
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
            onChange={onChangeSelect}
            value={order}
          />
        </Flex>
      </Flex>
    );
  },
);

export default SortBar;
