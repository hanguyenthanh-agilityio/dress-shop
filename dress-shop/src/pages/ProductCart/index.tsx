import { Container, Heading } from "@chakra-ui/react";

// Components
import Cart from "../../components/Cart";

// Constants
import { HEADER_LIST } from "../../constants/cart";

// Mocks
import { PRODUCT_CART } from "../../Mock/common";

const ProductCart = () => {
  return (
    <Container>
      <Heading
        textTransform="uppercase"
        pt="35px"
        fontWeight="700"
      >
        Your Cart
      </Heading>
      <Cart headerList={HEADER_LIST} products={PRODUCT_CART} />
    </Container>
  )
}


export default ProductCart;
