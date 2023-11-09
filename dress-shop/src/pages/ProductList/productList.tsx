import { PRODUCT } from "../../constants/common";
import ListProducts from "../../components/ListProduct";
import { Container } from "@chakra-ui/react";

const ProductList = () => {
  return (
    <Container>
      <ListProducts product={PRODUCT} />
    </Container>
  )
}

export default ProductList;
