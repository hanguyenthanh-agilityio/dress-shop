import { Button, Flex, Heading } from "@chakra-ui/react"
import SearchInput from "../SearchInput";

const Header = () => {
  return (
    <Flex justifyContent="space-between" w="1200px" alignItems="center">
      <Heading>Dress</Heading>
      <Flex alignItems="center">
        <SearchInput onChange={()=>{}} />
        <Button>Cart</Button>
      </Flex>
    </Flex>
  )
}

export default Header;
