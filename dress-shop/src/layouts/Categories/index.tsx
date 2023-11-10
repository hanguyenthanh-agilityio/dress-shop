import { Flex, Heading, Image } from "@chakra-ui/react";

const Categories = () => {

  return (
    <>
      <Heading pt="20px">Categories</Heading>
      <Flex justifyContent="space-between" pt="10x" pb="30px">
        <Image
          src="https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274091%2Fezgif.com-webp-to-jpg_l9flc0.jpg&w=3840&q=75"
          w="588px"
          h="354px"
          objectFit="cover"
          border="1px solid #efefef"
          mr='10px'
        />
        <Image
          src="https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=3840&q=75"
          w="588px"
          h="354px"
          objectFit="cover"
          border="1px solid #efefef"
          ml='10px'
        />
      </Flex>
    </>
  )
}

export default Categories;
