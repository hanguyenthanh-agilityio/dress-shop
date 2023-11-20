import { Flex, Heading, Image } from "@chakra-ui/react";

// Mocks
import { CATEGORIES } from "@/Mock/common";

const Categories = () => (
  <>
    <Heading
      pt={{ xs: "15px", md: "20px" }}
      pb={{ xs: "0px", md: "10px" }}
      textTransform="uppercase"
      fontWeight="bold"
      size={{ xs: "medium", md: "default" }}
    >
      Categories
    </Heading>
    <Flex
      flexDir={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      pt="10x"
      pb="30px"
    >
      {CATEGORIES.map((categories, index) => (
        <Flex position="relative" paddingTop={{ xs: "20px" }}>
          <Image
            key={index}
            src={categories.img}
            w={{
              xs: "350px",
              sm: "400px",
              md: "362px",
              lg: "485px",
              xl: "570px",
            }}
            h={{
              xs: "210px",
              sm: "240px",
              md: "218px",
              lg: "286px",
              xl: "354px",
            }}
            objectFit="cover"
            border="1px solid #efefef"
          />
          <Heading
            position="absolute"
            m="30px 20px"
            textTransform="uppercase"
            size={{ xs: "medium", md: "default" }}
          >
            {categories.name}
          </Heading>
        </Flex>
      ))}
    </Flex>
  </>
);

export default Categories;
