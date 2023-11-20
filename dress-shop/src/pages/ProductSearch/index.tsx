import { Container, Flex } from "@chakra-ui/react";

// Constants
import { OPTION_SORT } from "@/constants/common";

// Components
import SortBar from "@/components/SortBar";
import SearchInput from "@/components/SearchInput";
import ProductList from "@/components/ProductList";

// Hooks
import { useBreakPoints } from "@/hooks/useBreakPoints";

// Mocks
import { PRODUCTS } from "@/Mock/common";

const ProductSearch = () => {
  const { isLargeThanTablet } = useBreakPoints();

  const handleClickMenCategories = () => {};
  const handleClickWomenCategories = () => {};
  const handleChangeSelect = () => {};

  const categories = [
    { id: "men-categories", label: "Men", action: handleClickMenCategories },
    {
      id: "women-categories",
      label: "Women",
      action: handleClickWomenCategories,
    },
  ];

  return (
    <Container minH="90vh" mb={{ xs: "50px", lg: "0px" }}>
      {isLargeThanTablet ? null : (
        <Flex p="16px">
          <SearchInput onChange={() => {}} />
        </Flex>
      )}
      <SortBar
        categories={categories}
        options={OPTION_SORT}
        onChangeSelect={handleChangeSelect}
      />
      <ProductList products={PRODUCTS} />
    </Container>
  );
};

export default ProductSearch;
