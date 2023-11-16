import { SetStateAction, useState } from "react";
import { Box, Flex, Image, HStack } from "@chakra-ui/react";

// Mocks
import { slides } from "../../Mock/common";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const setSlide = (slide: SetStateAction<number>) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h={{xs: "240px", md: "280px", lg:"550px"}} w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
        <HStack justify="center" pos="absolute" bottom="30px" w="full">
          {Array.from({
            length: slides.length,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize="8px"
              m="7px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Carousel;
