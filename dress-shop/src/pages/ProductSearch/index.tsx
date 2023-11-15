import { Container } from "@chakra-ui/react";

// Constants
import { OPTION_SORT } from "../../constants/common";

// Components
import SortBar from "../../components/SortBar";

const ProductSearch = () => {
  const handleClickMenCategories = () => {};
  const handleClickWomenCategories = () => {};
  const handleChangeSelect = () => {};

  const categories = [
    {id: "men-categories", label: "Men", action: handleClickMenCategories},
    {id: "women-categories", label: "Women", action: handleClickWomenCategories},
  ]

  return (
    <Container>
      <SortBar
        categories={categories}
        options={OPTION_SORT}
        onChangeSelect={handleChangeSelect}
      />
    </Container>
  )
};

 export default ProductSearch;
