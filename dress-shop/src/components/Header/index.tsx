import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import SearchInput from "../SearchInput";

const Header = () => {
  return (
    <Flex
      boxShadow="0 10px 15px 0 rgba(0,0,0,.06)"
      py="20px"
    >
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading>Dress</Heading>
          <Flex alignItems="center">
            <SearchInput onChange={()=>{}} />
            <Flex
              alignItems="center"
              pl="30px" pr="10px"
              cursor="pointer"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z"></path>
              </svg>
              <Text pl="5px">Cart</Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Header;
