import { Flex, Image, Text } from "@chakra-ui/react";

// Constants
import { FALLBACK_SRC } from "@/constants";
import { memo } from "react";

// Components
import { IconHeart } from "../CustomIcon";

interface CardProps {
  src: string;
  altText?: string;
  name: string;
  price: number;
}

const Card = memo<CardProps>(({ src, name, price }: CardProps) => {
  return (
    <Flex
      flexDir="column"
      overflow="hidden"
      transition="0.5s all ease-in-out"
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      <Flex
        h={{
          xs: "140px",
          sm: "195px",
          md: "240px",
          lg: "331px",
          xl: "288px",
        }}
        position="relative"
      >
        <Image
          w="100%"
          h="100%"
          maxH={"300px"}
          src={src}
          alt={`product ${name}`}
          objectFit="cover"
          fallbackSrc={FALLBACK_SRC}
        />
        <Flex
          position="absolute"
          top="5px"
          right="5px"
          bg="hsla(0, 0%, 100%, .5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="3px 7px"
        >
          <IconHeart />
        </Flex>
      </Flex>
      <Flex>
        <Flex alignItems="baseline" m="10px" flexDir="column">
          <Text
            color="text.default"
            size={{ xs: "small", md: "default" }}
            isTruncated
          >
            {name}
          </Text>
          <Text size={{ xs: "small", md: "medium" }} variant="primary">
            P{price}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
});

export default Card;
