import { Flex, Heading, Image } from "@chakra-ui/react";

// Mocks
import { CATEGORIES } from "../../Mock/common";

const Categories = () => (
  <>
    <Heading
      pt="20px"
      pb="10px"
      textTransform="uppercase"
      fontWeight="bold"
    >
      Categories
    </Heading>
    <Flex justifyContent="space-between" pt="10x" pb="30px" >
      {CATEGORIES.map((categories, index) => (
        <Flex position="relative">
          <Image
            key={index}
            src={categories.img}
            w="570px"
            h="354px"
            objectFit="cover"
            border="1px solid #efefef"
          />
          <Heading
            position="absolute"
            m="30px 20px"
            textTransform="uppercase"
          >
            {categories.name}
          </Heading>
        </Flex>
      ))}
    </Flex>
  </>
)

export default Categories;
