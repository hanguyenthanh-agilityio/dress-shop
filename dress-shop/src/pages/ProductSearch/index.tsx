import { Container } from "@chakra-ui/react";

// Constants
import { OPTION_SORT } from "../../constants/common";

// Components
import Select from "../../components/Select";


const ProductSearch = () => {
  return (
    <Container>
      <Select options={OPTION_SORT} />
    </Container>
  )
};

 export default ProductSearch;
