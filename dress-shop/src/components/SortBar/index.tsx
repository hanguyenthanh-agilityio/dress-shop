import { Button, Flex, Select, Text } from "@chakra-ui/react";

const SortBar = () => {

  return (
    <Flex>
      <Flex>
        <Button>Men</Button>
        <Button>Women</Button>
      </Flex>
      <Flex>
        <Text>Sort by</Text>
        <Select placeholder="Price">
          123
        </Select>
      </Flex>
    </Flex>
  )
};

export default SortBar;
