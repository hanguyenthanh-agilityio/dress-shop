import { Container } from "@chakra-ui/react";

// Constants
import { OPTION_SORT } from "../../constants/common";

// Components
import SortBar from "../../components/SortBar";

const ProductSearch = () => {
  const handleClickMenCategories = () => {};
  const handleClickWomenCategories = () => {};
  const handleChangeSelect = () => {};

  return (
    <Container>
      <SortBar
        options={OPTION_SORT}
        onClickMenCategories={handleClickMenCategories}
        onClickWomenCategories={handleClickWomenCategories}
        onChangeSelect={handleChangeSelect}
      />
    </Container>
  )
};

 export default ProductSearch;
