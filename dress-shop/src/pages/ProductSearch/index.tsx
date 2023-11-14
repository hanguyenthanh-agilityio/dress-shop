import { Container } from "@chakra-ui/react";

// Constants
import { OPTION_SORT } from "../../constants/common";

// Components
import SortBar from "../../components/SortBar";

const ProductSearch = () => {
  return (
    <Container>
      <SortBar
        options={OPTION_SORT}
        onClickMenCategories={()=>{}}
        onClickWomenCategories={()=>{}}
      />
    </Container>
  )
};

 export default ProductSearch;
