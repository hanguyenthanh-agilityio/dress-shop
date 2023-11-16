import {
  Flex,
  Box,
  Image,
  Text,
} from '@chakra-ui/react'

interface CardProps {
  src: string;
  altText?: string;
  name: string;
  price: number;
}

const Card = ({
  src,
  altText,  // Set default value
  name,
  price
}: CardProps) => {

  return (
    <Flex
      flexDir="column"
      _hover={{
        borderWidth:"1px",
        rounded:"lg",
        shadow:"lg"
      }}
    >
      <Box position="relative">
        <Image
          src={src}
          alt={altText}
          boxSize={{xs: "194", md: "240px", lg:"331px", xl: "288px"}}
          objectFit="cover"
        />
      </Box>
      <Flex
        flexDir="column"
        p="10px"
        justifyContent="space-between"
        alignContent="center"
      >
        <Text size={{xs: "small", md: "default"}} isTruncated>
          {name}
        </Text>
        <Text size={{xs: "small", md: "medium"}} variant="primary">
          P{price}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Card;
