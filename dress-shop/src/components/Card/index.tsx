import { Flex, Box, Image, Text } from "@chakra-ui/react";

interface CardProps {
  src: string;
  altText?: string;
  name: string;
  price: number;
}

const Card = ({ src, altText = "Product image", name, price }: CardProps) => {
  return (
    <Flex
      className="123"
      flexDir="column"
      _hover={{
        borderWidth: "1px",
        rounded: "lg",
        shadow: "lg",
      }}
    >
      <Box position="relative">
        <Image src={src} alt={altText} boxSize="288px" objectFit="cover" />
      </Box>
      <Flex
        flexDir="column"
        p="10px"
        justifyContent="space-between"
        alignContent="center"
      >
        <Text size={{ xs: "small", md: "default" }} isTruncated>
          {name}
        </Text>
        <Text size={{ xs: "small", md: "medium" }} variant="primary">
          P{price}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
