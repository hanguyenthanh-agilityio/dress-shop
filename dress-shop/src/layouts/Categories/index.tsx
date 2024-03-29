import { Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCallback } from "react";

// Types
import { Category } from "@/types/common";

// Routes
import { ROUTES } from "@/constants/routes";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

   // Handle filter by men category
   const handleClickMenCategories = useCallback(() => {
    navigate(ROUTES.PRODUCT_SEARCH)
    searchParams.set("category", "m");
    setSearchParams(searchParams);
  }, [navigate, searchParams, setSearchParams]);

  // Handle filter by women category
  const handleClickWomenCategories = useCallback(() => {
    navigate(ROUTES.PRODUCT_SEARCH)
    searchParams.set("category", "f");
    setSearchParams(searchParams);
  }, [navigate, searchParams, setSearchParams]);

  const categories = [
    {
      id: "women-categories",
      img: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274091%2Fezgif.com-webp-to-jpg_l9flc0.jpg&w=1920&q=75",
      alt: "women-categories",
      label: "Women",
      action: handleClickWomenCategories,
      value: "f",
    },
    {
      id: "men-categories",
      img: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=3840&q=75",
      alt: "men-categories",
      label: "Men",
      action: handleClickMenCategories,
      value: "m",
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
      {categories.map(({id, img, label, alt, action}: Category) => (
        <Flex
            key={id}
            position="relative"
            onClick={action}
            minW = {{xs: "294px", md: "273px"}}
            minH= {{xs: "177px", md: "251px"}}
          >
          <Image
            alt={alt}
            src={img}
            w="100%"
            h="100%"
            objectFit="cover"
            border="1px solid #efefef"
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
}

export default Categories;
