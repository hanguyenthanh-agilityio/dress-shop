import { Flex, Heading, Image } from "@chakra-ui/react";

// Types
import { Category } from "@/types";

// Constants
import { FALLBACK_SRC } from "@/constants";

// Utils
import { MainCategories } from "@/utils";

const Categories = () => {
  return (
    <>
      <Heading
        pt={{ xs: "15px", md: "20px" }}
        pb={{ xs: "20px", md: "10px" }}
        textTransform="uppercase"
        fontWeight="bold"
        size={{ xs: "medium", md: "default" }}
        color="text.default"
      >
        Categories
      </Heading>
      <Flex
        flexDir={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        pt="10x"
        pb="30px"
        gap="4"
      >
        {MainCategories().map(({ id, img, label, alt, action }: Category) => (
          <Flex
            key={id}
            position="relative"
            onClick={action}
            minW={{ xs: "294px", md: "273px" }}
            minH={{ xs: "177px", md: "251px" }}
          >
            <Image
              alt={alt}
              src={img}
              w="100%"
              h="100%"
              objectFit="cover"
              border="1px solid #efefef"
              fallbackSrc={FALLBACK_SRC}
            />
            <Heading
              position="absolute"
              m="30px 20px"
              textTransform="uppercase"
              size={{ xs: "medium", md: "default" }}
            >
              {label}
            </Heading>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default Categories;
