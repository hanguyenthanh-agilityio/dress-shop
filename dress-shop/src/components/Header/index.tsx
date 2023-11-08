import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import SearchInput from "../SearchInput";
import cart  from "../../assets/Images/cart.svg";


const Header = () => {
  return (
    <Flex justifyContent="space-between" w="1200px" alignItems="center">
      <Heading>Dress</Heading>
      <Flex alignItems="center">
        <SearchInput onChange={()=>{}} />
        <Flex alignItems="center" pl="30px" pr="10px" cursor="pointer">
          <Image
            src={cart}
          />
          <Text pl="5px">Cart</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header;
