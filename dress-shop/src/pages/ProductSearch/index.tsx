import { Container, Flex } from "@chakra-ui/react";

// Constants
import { OPTION_SORT } from "../../constants/common";

// Components
import SortBar from "../../components/SortBar";
import SearchInput from "../../components/SearchInput";
import { useBreakPoints } from "../../hooks/useBreakPoints";
import ProductList from "../../components/ProductList";
import { PRODUCTS } from "../../Mock/common";

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
    <Container>
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
