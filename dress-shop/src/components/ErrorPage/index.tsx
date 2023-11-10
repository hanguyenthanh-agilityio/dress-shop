import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import {  useNavigate  } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      py="30px"
      px="6px"
      id="error-page"
    >
      <Heading
        display="inline-block"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        Oops!
      </Heading>
      <Text mt="12px" mb="8px">
        Page Not Found
      </Text>
      <Text mt="12px" mb="15px">Sorry, an unexpected error has occurred.</Text>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        fontWeight={600}
        width="120px"
        onClick={handleClick}
      >
        Go to Home
      </Button>
    </Flex>
  );
}
