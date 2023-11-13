import { Container, Heading } from "@chakra-ui/react";

// Components
import Cart from "../../components/Cart";

// Constants
import { HEADER_LIST } from "../../constants/cart";

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
      <Cart headerList={HEADER_LIST} />
    </Container>
  )
}


export default ProductCart;
