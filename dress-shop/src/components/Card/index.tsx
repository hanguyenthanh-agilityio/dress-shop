import { Flex, Box, Image, Text } from "@chakra-ui/react";

interface CardProps {
  src: string;
  altText?: string;
  name: string;
  price: number;
}

const Card = ({ src, altText = "Product photo", name, price }: CardProps) => {
  return (
    <Flex
      flexDir="column"
      _hover={{
        borderWidth: "1px",
        rounded: "lg",
        shadow: "lg",
      }}
    >
      <Box position="relative">
        <Image
          src={src}
          alt={altText}
          boxSize={{ xs: "142px", sm: "194px", md: "240px", lg: "288px" }}
          objectFit="cover"
        />
      </Box>
      <Flex
        flexDir="column"
        p="10px"
        justifyContent="space-between"
        alignContent="center"
      >
        <Text isTruncated>{name}</Text>
        <Text size="medium" variant="primary">
          P{price}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
