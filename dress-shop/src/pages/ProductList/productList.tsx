import { PRODUCTS } from "../../Mock/common";
import ListProducts from "../../components/ListProduct";
import { Container } from "@chakra-ui/react";

const ProductList = () => {
  return (
    <Container>
      <ListProducts product={PRODUCTS} />
    </Container>
  )
}

export default ProductList;
