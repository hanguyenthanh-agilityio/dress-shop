import { Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCallback } from "react";

// Types
import { Category } from "@/types";

// Constants
import {
  ROUTES,
  FALLBACK_SRC,
  MEN_CATEGORY,
  WOMEN_CATEGORY,
} from "@/constants";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Handle filter by men category
  const handleClickMenCategories = useCallback(() => {
    navigate(ROUTES.PRODUCT_SEARCH);
    searchParams.set("category", "m");
    setSearchParams(searchParams);
  }, [navigate, searchParams, setSearchParams]);

  // Handle filter by women category
  const handleClickWomenCategories = useCallback(() => {
    navigate(ROUTES.PRODUCT_SEARCH);
    searchParams.set("category", "f");
    setSearchParams(searchParams);
  }, [navigate, searchParams, setSearchParams]);

  const categories = [
    {
      id: WOMEN_CATEGORY.id,
      img: WOMEN_CATEGORY.img,
      alt: WOMEN_CATEGORY.alt,
      label: WOMEN_CATEGORY.label,
      action: handleClickWomenCategories,
      value: WOMEN_CATEGORY.value,
    },
    {
      id: MEN_CATEGORY.id,
      img: MEN_CATEGORY.img,
      alt: MEN_CATEGORY.label,
      label: MEN_CATEGORY.label,
      action: handleClickMenCategories,
      value: MEN_CATEGORY.value,
    },
  ];

  return (
    <>
      <Heading
        pt={{ xs: "15px", md: "20px" }}
        pb={{ xs: "20px", md: "10px" }}
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
        gap="4"
      >
        {categories.map(({ id, img, label, alt, action }: Category) => (
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
